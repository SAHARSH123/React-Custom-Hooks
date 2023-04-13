import { useState } from "react";

export const useToggle = (arr = [], index) => {
  const [curIndex, setCurIndex] = useState(index);
  const [curValue, setCurVale] = useState(arr[index]);
  const toggle = () => {
    let nextIndex = (curIndex + 1) % arr.length;
    setCurIndex(nextIndex);
    setCurVale(arr[nextIndex]);
  };

  return [curValue, toggle];
};
