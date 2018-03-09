import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class ImageUpload extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      selectedFile: ''
    };
  }

  onChange = (e) => {
    switch (e.target.name) {
      case 'selectedFile':
        this.state.selectedFile = e.target.files[0];
        break;
      default:
        this.state[e.target.name] = e.target.value;
    }

    this.setState(this.state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { description, selectedFile } = this.state;
    let formData = new FormData();

    formData.append('description', description);
    formData.append('selectedFile', selectedFile);

    axios.post('/', formData)
      .then((result) => {
        console.log(result)
      });
  }

  render() {
    const { description, selectedFile} = this.state;
    return (
     <div>


        <div>
          <form onSubmit={this.onSubmit}>
            <input 
              type="text"
              name="description"
              value={description}
              onChange={this.onChange}
            />
            <input 
              type="file"
              name="selectedFile"
              onChange={this.onChange}
            />
            <button type="submit">serperate</button>
          </form>
        </div>



     </div>
    );
  }

}

export default ImageUpload