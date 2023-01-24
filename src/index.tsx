import { createRoot } from "react-dom/client";
import Parent from "./props/Parent";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 5px;
  display: block;
  margin-top: 10px;
  background-color: transparent;
  border: 1px solid green;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    background-color: green;
    color: white;
  }
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  color: red;
  font-size: 15px;
  font-style: italic;
  text-decoration: underline;
  border: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 3px;
  border-radius: 3px;
  border: 1px solid crimson;
  margin-left: 10px;
`;

const App = () => {
  const [people, setPeople] = useState<string[] | undefined>([]);
  const [person, setPerson] = useState("");

  useEffect(() => {
    if (localStorage.getItem("people"))
      setPeople(JSON.parse(localStorage.getItem("people")!));
  }, []);

  const addToTheList = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (people && person.length) {
      setPeople([...people, person]);
      setPerson("");
      localStorage.setItem("people", JSON.stringify(people));
    }
  };

  const deleteName = (index: number) => {
    const newPeople = people?.filter((_, i) => i !== index);
    setPeople(newPeople);
    localStorage.setItem("people", JSON.stringify(people));
  };

  return (
    <>
      <h1>Party Guest List:</h1>
      <ul>
        {people &&
          people.map((person, index) => {
            return (
              <div key={person}>
                <li>
                  <span>{person}</span>
                  <DeleteButton onClick={() => deleteName(index)}>
                    delete
                  </DeleteButton>
                </li>
              </div>
            );
          })}
      </ul>
      <label htmlFor="">Person Name:</label>
      <Input
        onChange={(e) => setPerson(e.target.value)}
        type="text"
        id="person"
        value={person}
      ></Input>
      <Button type="submit" onClick={addToTheList}>
        Click to add!
      </Button>
    </>
  );
};

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);
root.render(<App />);
