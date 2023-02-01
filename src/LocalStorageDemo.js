import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage("name", "");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return <input type="text" value={name} onChange={handleChange}></input>;
}

export default LocalStorageDemo;
