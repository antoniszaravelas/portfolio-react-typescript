import { createRoot } from "react-dom/client";
import Parent from "./props/Parent";

const App = () => {
  return <Parent />;
};

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);
root.render(<App />);
