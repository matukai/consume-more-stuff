import React from 'react';

export const Item = (props) => {

  return  (
    <div>

      <h1>Item</h1>
      <br/>
      <div className="attribute"><span>Name: </span>{props.name}</div>
      <div className="attribute"><span>Price: </span>{props.price}</div>
      <div className="attribute"><span>model: </span>{props.model}</div>
      <div className="attribute"><span>condition: </span>{props.condition}</div>
      <div className="attribute"><span>category: </span>{props.category}</div>
      <div className="attribute"><span>Dimensions: </span>{props.dimensions}</div>
      <div className="attribute"><span>created_at: </span>{props.created_at}</div>
      <div className="attribute"><span>updated_at: </span>{props.updated_at}</div>
      <div className="attribute"><span>image: </span>{props.image}</div>

    </div>
  )
}


export default Item;