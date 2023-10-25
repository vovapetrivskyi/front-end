import DataComponent from "./DataComponent";
import "./main.css";
import React, { useState, useEffect } from "react";

const testData = [
  {
    name: "Sunflower1",
    age: 10,
    image: "TestImages//sunflower1.jpg",
    isTestData: true,
  },
  {
    name: "Rose1",
    age: 5,
    image: "TestImages//rose1.jpg",
    isTestData: true,
  },
  {
    name: "Pivon1",
    age: 5,
    image: "TestImages//pivons1.jpg",
    isTestData: true,
  },
];

export default function MainComponent() {
  const url = "http://localhost:3010/GetDoggos";

  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.text())
      .then((res) => {
        try {
          let data = JSON.parse(res);

          setData(data);
        } catch (err) {
          setData(testData);
        }
      })
      .catch(() => setData(testData));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <div className="main">
        {data.map((dataObject) => DataComponent(dataObject))}
      </div>
    </div>
  );
}
