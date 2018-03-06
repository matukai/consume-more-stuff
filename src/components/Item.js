import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { loadCards } from '../actions/itemActions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const Item = ({
  id,
  name,
  price,
  model,
  dimensions,
  created_at,
  updated_at,
  notes,
  user_id,
  category_id,
  condition_id,
  item_status_id,
  image }) => {
    return (
      
      <div className="item">
      <h1>{name}</h1>
        <ul>
        { name && <li>Name: {name}</li> }
        { price && <li>Price: {price}</li> }  
        { model && <li>Model: {model}</li> }
        { dimensions && <li>Dimensions: {dimensions}</li> }
        { created_at && <li>Created at: {created_at}</li> }
        { updated_at && <li>Updated at: {updated_at}</li> }
        { notes && <li>Model: {notes}</li> }
        { user_id && <li>Model: {user_id}</li> }
        { category_id && <li>Category: {category_id}</li> }
        { condition_id && <li>Condition: {condition_id}</li> }
        { item_status_id && <li>Model: {item_status_id}</li> }
        { image && <li>Image: {image}</li> }
        </ul>
      </div>
  )
}

export default Item