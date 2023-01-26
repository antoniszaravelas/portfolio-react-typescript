import { useState } from "react";
import { createRoot } from "react-dom/client";
import UserSearchClass from "./classes/UserSearchClass";
import EventComponent from "./events/EventComponent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
  const [people, setPeople] = useState<string[]>([]);
  const callback = (people: string[]) => setPeople(people);
  return (
    <>
      <GuestList personParameter={callback} />
      <UserSearch people={people} />
      <EventComponent />
    </>
  );
};

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);
root.render(<App />);
