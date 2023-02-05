import { useState, useEffect } from "react";
export function useDebounce(value = "", delay = 0) {
  const [initialValue, setInitialValue] = useState(value);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setInitialValue(value);
    }, delay);
    console.log("setting timeout id ", timeOutId);
    return () => {
      clearTimeout(timeOutId);
      console.log(`Clearing timeout id ${timeOutId}`);
    };
  }, [value, delay]);

  return initialValue;
}
