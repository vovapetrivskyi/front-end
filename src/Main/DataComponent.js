//import { useNavigate } from "react-router-dom";

//import { Route } from "react-router-dom";

//import AddEditPage from "../AddEdit/AddEditPage";

function DataComponent(dataSet) {
  //const navigate = useNavigate();

  const divName = "div" + dataSet.Name + "_" + dataSet._id;

  const imageSrc = !dataSet.isTestData
    ? dataSet.Photo
    : dataSet.image;

  const text = !dataSet.isTestData
    ? "Name:" +
      dataSet.Name +
      " Owner:" +
      dataSet.Owner +
      " Age:" + 
      dataSet.Age +
      " Note: " +
      dataSet.Note
    : dataSet.name;

  const EditEntity = (entityId) => {
    if (entityId === undefined) {
      window.location.assign("/AddEdit");
    } else {
      window.location.assign("/AddEdit?entityId=" + entityId);
    }
  };

  return (
    <div id={divName} class="divPhotos">
      <img src={imageSrc} alt={!dataSet.isTestData ? dataSet.Name : dataSet.name}></img>
      <p class="photosText">{text}</p>
      <button
        onClick={() => {
          EditEntity(dataSet._id);
        }}
      >
        Edit
      </button>
    </div>
  );
}

export default DataComponent;
