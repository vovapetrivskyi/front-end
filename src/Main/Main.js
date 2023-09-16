import DataComponent from "./DataComponent";
import "./main.css";
import React, { useState, useEffect } from "react";

const testData = [
  {
    name: "Sunflower1",
    age: 10,
    image: "TestImages//sunflower1.jpg",
  },
  {
    name: "Rose1",
    age: 5,
    image: "TestImages//rose1.jpg",
  },
  {
    name: "Pivon1",
    age: 5,
    image: "TestImages//pivons1.jpg",
  },
];

export default function Main() {
  const url = "http://localhost:3010/GetDoggos";

  //const [data, setData] = useState(testData);
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="main">
      {data.map((dataObject) => DataComponent(dataObject))}
    </div>
  );
}
