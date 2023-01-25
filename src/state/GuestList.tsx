import { useEffect, useState } from "react";
import { Button, DeleteButton, Input } from "./styledComponents";
import UserSearch from "./UserSearch";

interface GuestListProps {
  personParameter: (person: string[]) => void;
}

const GuestList = (props: GuestListProps) => {
  const [people, setPeople] = useState<string[]>([]);
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

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
    props.personParameter(people);
  }, [people]);

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
      <br />
      <br />
    </>
  );
};

export default GuestList;
function personParameter(people: string[]) {
  throw new Error("Function not implemented.");
}
