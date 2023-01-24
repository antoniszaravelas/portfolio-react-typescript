interface ChildProps {
  childName: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child: React.FC<ChildProps> = ({
  childName,
  onClick,
  children,
}) => {
  return (
    <>
      <h1>hello</h1>
      <div>hi I'm the child {childName}</div>
      <button onClick={onClick}>click me</button>
      {children}
    </>
  );
};
