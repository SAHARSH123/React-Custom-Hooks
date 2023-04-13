import React from "react";
import { useToggle } from "./hooks/useToggle";

const ToggleDemo = () => {
  const [value, toggle] = useToggle([0, 1, 2, 3, 4, 5], 2);

  return (
    <div>
      <div>Current value is {value}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default ToggleDemo;
