import { useState, useRef } from 'react';

import "./addedit.css";

export default function AddEditItem() {
  const noPhotoSrc = "Images//noPhoto.jpg"

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [owner, setOwner] = useState("");
  const [note, setNote] = useState("");
  const [photoSrc, setPhotoSrc] = useState(noPhotoSrc);

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];

    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    event.target.value = null;

    console.log(event.target.files);

    console.log(fileObj);

    console.log(fileObj.name);
  };

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
        <p></p>
        <label>Enter owner
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </label>
        <p></p>
        <label>Enter note
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </label>
        <p></p>
        <input
          style={{ display: 'none' }}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />
        <button onClick={handleClick}>Load Photo</button>
        <p></p>
        <img
          src={photoSrc}
          alt=""
          accept="image/*"
        ></img>
      </form>
    </div>
  );
}
