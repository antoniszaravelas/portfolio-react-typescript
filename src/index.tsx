import { createRoot } from "react-dom/client";
import GuestList from "./state/GuestList";

const App = () => {
  return <GuestList />;
};

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);
root.render(<App />);
