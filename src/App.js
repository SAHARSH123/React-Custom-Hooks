import React from "react";
import AddSubtractDemo from "./AddSubtractDemo";
import DebounceDemo from "./DebounceDemo";
import FetchData from "./FetchDemo";
import LocalStorageDemo from "./LocalStorageDemo";
import ToggleDemo from "./ToggleDemo";

function App() {
  return (
    <div>
      <AddSubtractDemo />
      <hr />
      <LocalStorageDemo />
      <hr />
      <DebounceDemo />
      <hr />
      <FetchData />
      <hr />
      <ToggleDemo />
    </div>
  );
}

export default App;
