import React from 'react';

export const Item = (props) => {
  return  (
    <div className="item">
      <h1>{props.name}</h1>
        <ul>
          <li>Name: {props.name}</li>
          <li>Price: {props.price}</li>
          <li>Model: {props.model}</li>
          <li>Condition: {props.condition}</li>
          <li>Category: {props.category}</li>
          <li>Dimensions: {props.dimensions}</li>
          <li>Created at: {props.created_at}</li>
          <li>Updated at: {props.updated_at}</li>
          <li>Image: {props.image}</li>
        </ul>
      </div>
  )
}


export default Item;