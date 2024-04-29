//import { useNavigate } from "react-router-dom";

//import { Route } from "react-router-dom";

//import AddEditPage from "../AddEdit/AddEditPage";

function DataComponent(dataSet) {
  //const navigate = useNavigate();

  const divName = "div" + dataSet.Name + "_" + dataSet._id;

  const imageSrc = !dataSet.isTestData ? dataSet.Photo : dataSet.image;

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

  const DeleteEntity = (e, entityId) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: "",
      };

      let request = {
        id: entityId,
      };

      requestOptions.body = JSON.stringify(request);
      fetch("http://localhost:3010/DeleteDoggo", requestOptions)
          .then(async (response) => {
            const isJson = response.headers
              .get("content-type")
              ?.includes("application/json");
            const data = isJson && (await response.json());

            // check for error response
            if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
            } else {
              window.location.assign("/");
            }
          })
          .catch((error) => {
            alert("Error. Try later, please");
          });
    }
  };

  return (
    <div id={divName} class="divPhotos">
      <img
        src={imageSrc}
        alt={!dataSet.isTestData ? dataSet.Name : dataSet.name}
      ></img>
      <p class="photosText">{text}</p>
      <button
        onClick={() => {
          EditEntity(dataSet._id);
        }}
      >
        Edit
      </button>
      <button
        onClick={(e) => {
          DeleteEntity(e, dataSet._id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default DataComponent;
