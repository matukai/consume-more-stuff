import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createItem} from '../../actions/itemActions';
import ImageUpload from '../ImageUpload';
import axios from 'axios';

class NewItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
        name: '',
        selectedFile: '',
        price: '',
        condition: '',
        category: '',
        model: '',
        dimensions: '',
        notes:''
    }
    
    this.handleInput = this.handleInput.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleInput (event) {
    const { name, value } = event.target
    this.setState( { [name]: value} )
  }

  handleUpload (event) {
    const { name } = event.target
    const selectedFile = event.target.files[0]
    this.setState( { [name] : selectedFile})
  }

  // SelectedFile is the image object
  submitHandler (event) {
    event.preventDefault();
    const { name, selectedFile, price, condition, category, model, dimensions, notes} = this.state;
    let formData = new FormData();
    formData.append('name', name)
    formData.append('selectedFile', selectedFile)
    formData.append('price', price)
    formData.append('condition', condition)
    formData.append('category', category)
    formData.append('model', model)
    formData.append('dimensions', dimensions)
    formData.append('notes', notes)
    const history = this.props.history
    this.props.createItem(formData, () => {
      history.push(`/item/${this.props.newItem.id}`)
    });
  }

  render() {

    return (
      <div className="main-content">

        <form className="new-item-form" onSubmit={this.submitHandler}>
          <div className="form-title-row">
            <h1>Add a New Item</h1>
          </div>
      
          <div className="form-row">
            <span>Item name</span>
            <input type="text"
            placeholder="(required)"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}/>
          </div>

          <div className="form-row">
            <span>Price</span>
            <input type="text"
            name="price"
            placeholder="(required)"
            price="price"
            value={this.state.price}
            onChange={this.handleInput}/>
          </div>

          <div className="form-row">
            <span>Condition</span>
            <select 
            name="condition"
            value={this.state.conditon}
            onChange={this.handleInput}>
              <option value="">Select...</option>
              <option value="5">New</option>
              <option value="4">Good</option>
              <option value="3">Fair</option>
              <option value="2">Worn</option>
              <option value="1">Used</option>
            </select>
          </div>

          <div className="form-row">
          <span>Category</span>
            <select
              name="category"
              value={this.state.category}
              onChange={this.handleInput}>
                <option value="">Select...</option>
                <option value="1">Vehicles</option>
                <option value="2">Appliances</option>
                <option value="3">Computers</option>
                <option value="4">Furniture</option>
            </select>
          </div>

          <div className="form-row">
          <span>Model / Make</span>
            <input type="text"
            name="model"
            placeholder="Model / Make"
            value={this.state.model}
            onChange={this.handleInput}/>
          </div>

          <div className="form-row">
            <span>Dimensions</span>  
            <input type="text"
            name="dimensions"
            placeholder="L x W x H"
            value={this.state.dimensions}
            onChange={this.handleInput}/>
          </div>

          <div className="form-text-area">
            <textarea name="notes" 
            placeholder="Notes" 
            value={this.state.notes} 
            onChange={this.handleInput} 
            id="" cols="60" rows="10">
              Notes
            </textarea>
          </div>

          <div className="form-new">
            <button type="submit">Create New Item</button>
          </div>

            <input 
              type="file"
              name="selectedFile"
              onChange={this.handleUpload}
            />

        </form>


      </div>
    )
  }
}// end NewItem

const mapStateToProps = state => {
  return {
    newItem: state.items.newItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createItem: (data,redirectCallback) => {
      dispatch(createItem(data, redirectCallback))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewItem)