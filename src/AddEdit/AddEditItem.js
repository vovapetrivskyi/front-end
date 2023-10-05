import { React, useState } from "react";

import "./addedit.css";

export default function AddEditItem() {
  const noPhotoSrc = "Images//noPhoto.jpg";

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [owner, setOwner] = useState("");
  const [note, setNote] = useState("");
  const [photoSrc, setPhotoSrc] = useState(noPhotoSrc);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileInput = async (e) => {
    let imageFile = e.target.files[0];

    let imageInBase64 = await convertBase64(imageFile);

    setPhotoSrc(imageInBase64);
  };

  const handleSubmit = (e) => {
    //TO DO Save To SERVER
  };

  return (
    <div className="addedit">
      <form className="addEditForm" onSubmit={handleSubmit}>
        <label>
          Enter name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <p></p>
        <label>
          Enter age:
          <input
            type="number"
            value={age}
            min="0"
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <p></p>
        <label>
          Enter owner
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </label>
        <p></p>
        <label>
          Enter note
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </label>
        <p></p>
        <input type="file" onChange={handleFileInput} accept="image/*" />
        <p></p>
        <img src={photoSrc} alt=""></img>
        <p></p>
        <input className="saveButton" type="submit" value="Зберегти" />
      </form>
    </div>
  );
}
