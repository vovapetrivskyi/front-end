function DataComponent(dataSet) {
  const divName = "div" + dataSet.name;

  const imageSrc = "data:image/jpeg;base64," + dataSet.photo;

  return (
    // <div id={divName} class="divPhotos">
    //   <img
    //     src={dataSet.image}
    //     alt={dataSet.name}
    //   ></img>      
    //   <p class="photosText">
    //     Name: {dataSet.name} {"   "} Age: {dataSet.age}
    //   </p>
    // </div>
    <div id={divName} class="divPhotos">
      <img
        src={imageSrc}
        alt={dataSet.name}
      ></img>      
      <p class="photosText">
        Name: {dataSet.name} {"   "} Owner: {dataSet.owner} {"   "} Owner: {dataSet.owner} {"   "} Note: {dataSet.note}
      </p>
    </div>
  );
}

export default DataComponent;
