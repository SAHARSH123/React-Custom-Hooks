import React, { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

function DebounceDemo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(searchTerm, 3000);

  useEffect(() => {
    //mimicing api call
    setLoading(true);
    setTimeout(() => {
      console.log("Initated search for ", searchTerm);
      setLoading(false);
    }, 2000);
  }, [debouncedValue]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) return <div>Loding ...</div>;
  return <input type="text" value={searchTerm} onChange={handleChange} />;
}

export default DebounceDemo;
