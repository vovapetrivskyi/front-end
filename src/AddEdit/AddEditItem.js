import { useState } from 'react';

import "./addedit.css";

export default function AddEditItem() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div class="addedit">
      <form class="addEditForm">
      <label>Enter name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p></p>
      <label>Enter age:
        <input
          type="number" 
          value={age}
          min="0"
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
    </form>
    </div>
  );
}
