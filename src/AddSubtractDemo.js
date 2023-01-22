import React from "react";
import { useAddSubtract } from "./hooks/useAddSubtract";

const AddSubtractDemo = () => {
  const [count, addCount, removeCount] = useAddSubtract(0);
  return (
    <div>
      <p>Current Count {count}</p>
      <button onClick={addCount}>+</button>
      <button onClick={removeCount}>-</button>
    </div>
  );
};

export default AddSubtractDemo;
