import { useState } from "react";

export function useAddSubtract(initial = 0) {
  const [count, setcount] = useState(initial);

  const addCount = () => {
    setcount((prevCount) => prevCount + 1);
  };
  const removeCount = () => {
    setcount((prevCount) => prevCount - 1);
  };

  return [count, addCount, removeCount];
}
