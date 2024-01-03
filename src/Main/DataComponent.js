//import { useNavigate } from "react-router-dom";

//import { Route } from "react-router-dom";

//import AddEditPage from "../AddEdit/AddEditPage";

function DataComponent(dataSet) {
  //const navigate = useNavigate();

  const divName = "div" + dataSet.name + "_" + dataSet._id;

  const imageSrc = !dataSet.isTestData
    ? "data:image/jpeg;base64," + dataSet.photo
    : dataSet.image;

  const text = !dataSet.isTestData
    ? "Name:" +
      dataSet.name +
      " Owner:" +
      dataSet.owner +
      " Note: " +
      dataSet.note
    : dataSet.name;

  const EditEntity = (entityId) => {
    if (entityId === undefined) {
      window.location.assign("/AddEdit");
    } else {
      window.location.assign("/AddEdit?entityId=" + entityId);
      // <Route exact path="/AddEdit" render={(entityId) => (
      //   <AddEditPage id={entityId}/>
   // )} />
    }
    //navigate('/AddEdit?entityId=' + entityId);
  };

  return (
    <div id={divName} class="divPhotos">
      <img src={imageSrc} alt={dataSet.name}></img>
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
