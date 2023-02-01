import { useEffect, useState } from "react";

function getInitialValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  return initialValue;
}
export default function useLocalStorage(key, initialValue) {
  const [value, setvalue] = useState(() => {
    return getInitialValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setvalue];
}
