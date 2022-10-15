import React, { useState } from "react";
import { navigate } from "@reach/router";

const Select = () => {
  const [get, setGet] = useState("");
  const [id, setId] = useState("");

  const submitHan = (e) => {
    e.preventDefault();
    navigate(`/${get}/${id}`);
  };

  return (
    <div>
      <form onSubmit={submitHan}>
        Search for:
        <select onChange={(e) => setGet(e.target.value)}>
          <option value="">-----</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <label>ID:</label>
        <input type="text" onChange={(e) => setId(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Select;
