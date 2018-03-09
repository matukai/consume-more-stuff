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

  onChange = (event) => {
    switch (e.target.name) {
      case 'selectedFile':
        state.selectedFile = e.target.files[0];
        break;
      default:
        state[e.target.name] = e.target.value;
    }

    this.setState(state);
  }

  onSubmit = (event) => {
    event.preventDefault();
    e.preventDefault();
    const { description, selectedFile } = this.state;
    let formData = new FormData();

    formData.append('description', description);
    formData.append('selectedFile', selectedFile);

    axios.post('/', formData)
      .then((result) => {
        // access results...
      });
  }

  render() {
    const { description, selectedFile} = this.state;
    return (
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
    );
  }

}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps,mapDispatchToProps)(ImageUpload)