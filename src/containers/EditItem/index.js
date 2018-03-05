import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editItem} from '../../actions/itemActions';

class EditItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      editItem: {
        name: '',
        image: '',
        price: '',
        condition: '',
        category: '',
        model: '',
        dimensions: '',
        notes:''
      }
    }

    this.handleItemName = this.handleItemName.bind(this)
    this.handleItemImage = this.handleItemImage.bind(this)
    this.handleItemPrice = this.handleItemPrice.bind(this)
    this.handleItemCondition = this.handleItemCondition.bind(this)
    this.handleItemCategory = this.handleItemCategory.bind(this)
    this.handleItemModel = this.handleItemModel.bind(this)
    this.handleItemDimensions = this.handleItemDimensions.bind(this)
    this.handleItemNotes = this.handleItemNotes.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  handleItemName (event) {
    this.setState({ newItem: Object.assign({}, this.state.editItem, {name: event.target.value})})
  }

  handleItemImage (event) {
    this.setState({ editItem: Object.assign({}, this.state.editItem, {image: event.target.value})})
  }

  handleItemPrice (event) {
    this.setState({ editItem: Object.assign({}, this.state.editItem, {price: event.target.value})})
  }

  handleItemCondition (event) {
    this.setState({ editItem: Object.assign({}, this.state.editItem, {condition: event.target.value})})
  }

  handleItemCategory (event) {
    this.setState({ editItem: Object.assign({}, this.state.editItem, {category: event.target.value})})
  }

  handleItemModel (event) {
    this.setState({ editItem: Object.assign({}, this.state.editItem, {model: event.target.value})})
  }

  handleItemDimensions (event) {
    this.setState({ editItem: Object.assign({}, this.state.editItem, {dimensions: event.target.value})})
  }

  handleItemNotes (event) {
    this.setState({ editItem: Object.assign({}, this.state.editItem, {notes: event.target.value})})
  }

  submitHandler (event) {
    event.preventDefault();
    editItem(this.state.editItem);
    this.setState({editItem: Object.assign({}, this.state.editItem, {name: '', image: '', price: '',
  condition: '', category: '', model: '', dimensions: '', notes: ''})})
  }

  render() {
    return (
      <div className="new-item-form">
        <form onSubmit={this.submitHandler}>

          <input type="text"
          placeholder="item name"
          value={this.state.editItem.name}
          onChange={this.handleItemName}/>
          <br/>
          <input type="text"
          placeholder="image"
          value={this.state.editItem.image}
          onChange={this.handleItemImage}/>
          <br/>
          <input type="text"
          placeholder="price"
          value={this.state.editItem.price}
          onChange={this.handleItemPrice}/>
          <br/>
          <select 
          name="condition" 
          value={this.state.editItem.conditon}
          onChange={this.handleItemCondition}>
          <option value="">Condition</option>
          <option value="new">New</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="worn">Worn</option>
          <option value="used">Used</option>
          </select>
          <br/>
          <select
          name="category"
          value={this.state.editItem.category}
          onChange={this.handleItemCategory}>
          <option value="">Category</option>
          <option value="vehicles">Vehicles</option>
          <option value="appliances">Appliances</option>
          <option value="computers">Computers</option>
          <option value="furniture">Furniture</option>
          </select>
          <br/>
          <input type="text"
          placeholder="model/make"
          value={this.state.editItem.model}
          onChange={this.handleItemModel}/>
          <br/>
          <input type="text"
          placeholder="dimensions"
          value={this.state.editItem.dimensions}
          onChange={this.handleItemDimensions}/>
          <br/>
          <textarea name="notes" placeholder="notes" value={this.state.editItem.notes} onChange={this.handleItemNotes} 
          id="" cols="30" rows="10">Notes: </textarea>
          <br/>
          <input type="submit"/>
          
        </form>
      </div>
    )
  }
}// end NewItem

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(EditItem)