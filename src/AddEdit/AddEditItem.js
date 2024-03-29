import React from "react";
import "./addedit.css";

class AddEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      owner: "",
      note: "",
      photoSrc: "Images//noPhoto.jpg",
      isLoaded: false,
      isEdit: false
    };
  }

  componentDidMount() {
    if (!this.state.isLoaded) {
      if (this.props.entityId !== undefined && this.props.entityId !== null) {
        let url = "http://localhost:3010/GetDoggoById?id=" + this.props.entityId;

        fetch(url)
        .then((res) => res.json())
        .then((result) => {
          if (result != null) {
            this.setState({
              name: result.Name,
              age: result.Age,
              owner: result.Owner,
              note: result.Note,
              photoSrc: result.Photo,
              isLoaded: false,
              isEdit: true
            });
          }
        })
        .catch((error) => {
          alert("Doggo not found");
          console.error(error);
        });
      }
      this.setState({ isLoaded: true });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validateInput()) {
      let doggo = {
        Name: this.state.name,
        Age: this.state.age,
        Owner: this.state.owner,
        Note: this.state.note,
        Photo: this.state.photoSrc,
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "",
      };

      if (this.state.isEdit) {
        doggo._id = this.props.entityId;
        requestOptions.body = JSON.stringify(doggo);
        requestOptions.method = "PUT";
        fetch("http://localhost:3010/UpdateDoggo", requestOptions)
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
      } else {
        requestOptions.body = JSON.stringify(doggo);
        fetch("http://localhost:3010/SaveDoggo", requestOptions)
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
            }
          })
          .catch((error) => {
            alert("Error. Try later, please");
          });
      }
    }
  }

  validateInput() {
    let result = true;
    let validationError = "";

    if (this.state.name === undefined || this.state.name === "") {
      validationError += "Name can not be empty.";
    }

    if (this.state.age === undefined || this.state.age === "") {
      validationError += "Age can not be empty.";
    }

    if (validationError !== "") {
      alert(validationError);

      result = false;
    }

    return result;
  };

  async convertBase64(file) {
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

  async handleFileInput(e) {
    let imageFile = e.target.files[0];

    let imageInBase64 = await this.convertBase64(imageFile);

    this.setState({ photoSrc: imageInBase64 });
  };

  render() {
    return (
      <div className="addedit">
        <form className="addEditForm" onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Enter name:
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </label>
          <p></p>
          <label>
            Enter age:
            <input
              type="number"
              value={this.state.age}
              min="0"
              onChange={(e) => this.setState({ age: e.target.value })}
            />
          </label>
          <p></p>
          <label>
            Enter owner
            <input
              type="text"
              value={this.state.owner}
              onChange={(e) => this.setState({ owner: e.target.value })}
            />
          </label>
          <p></p>
          <label>
            Enter note
            <input
              type="text"
              value={this.state.note}
              onChange={(e) => this.setState({ note: e.target.note })}
            />
          </label>
          <p></p>
          <input
            type="file"
            onChange={this.handleFileInput.bind(this)}
            accept="image/*"
          />
          <p></p>
          <img src={this.state.photoSrc} alt=""></img>
          <p></p>
          <input className="saveButton" type="submit" value="Зберегти" />
        </form>
      </div>
    );
  }
}

export default AddEdit;
