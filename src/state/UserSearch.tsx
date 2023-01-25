import { Input } from "./styledComponents";
import { useState } from "react";

const UserSearch = ({ people }: { people: string[] }) => {
  const [filterPerson, setFilterPerson] = useState<string[]>();

  return (
    <>
      <div>Search for user by typing in the name: </div>
      <br />
      <Input
        onChange={(e) =>
          setFilterPerson(
            people.filter((person) =>
              Boolean(e.target.value)
                ? person.toLowerCase().includes(e.target.value)
                : 0
            )
          )
        }
        type="text"
      />
      {filterPerson && filterPerson.map((person) => <div>{person}</div>)}
    </>
  );
};

export default UserSearch;
