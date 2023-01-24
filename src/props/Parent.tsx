import { Child } from "./Child";

const Parent = () => {
  return (
    <Child childName="antonis" onClick={() => console.log("you clicked!")}>
      <div>I will be as a children prop an I don't care!</div>
    </Child>
  );
};

export default Parent;
