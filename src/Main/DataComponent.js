function DataComponent(dataSet) {
  const divName = "div" + dataSet.name;

  const imageSrc = !dataSet.isTestData ? "data:image/jpeg;base64," + dataSet.photo : dataSet.image;

  const text = !dataSet.isTestData ? 'Name:' + dataSet.name + ' Owner:' + dataSet.owner + ' Note: ' + dataSet.note : dataSet.name;
  return (
    <div id={divName} class="divPhotos">
      <img
        src={imageSrc}
        alt={dataSet.name}
      ></img>      
      <p class="photosText">
        {text}
      </p>
    </div>
  );
}

export default DataComponent;
