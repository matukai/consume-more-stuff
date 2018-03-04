import React, { Component } from 'react';

class NewItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      newItem: {
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

  }



  render() {
    return (
      <div className="new-item-form">
        <form>

          <input type="text"
          placeholder="item name"
          value
          onChange
          />
          <br/>
          <input type="text"
          placeholder="image"
          value
          onChange
          />
          <br/>
          <input type="text"
          placeholder="price"
          value
          onChange
          />
          <br/>
          <select 
          name="condition" 
          value={this.state.condition}
          onChange>
          <option value="">Condition</option>
          <option value="ew">New</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="worn">Worn</option>
          <option value="used">Used</option>
          </select>
          <br/>
          <select 
          name="category"
          value={this.state.category}
          onChange>
          <option value="">Category</option>
          <option value="vehicles">Vehicles</option>
          <option value="appliances">Appliances</option>
          <option value="computers">Computers</option>
          <option value="furniture">Furniture</option>
          </select>
          <br/>
          <input type="text"
          placeholder="model/make"
          value
          onChange
          />
          <br/>
          <input type="text"
          placeholder="dimensions"
          value
          onChange
          />
          <br/>
          <textarea name="notes" id="" cols="30" rows="10">Notes: </textarea>
          <br/>

        </form>
      </div>
    )
  }
}// end NewItem


export default NewItem