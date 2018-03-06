import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { loadCards } from '../actions/itemActions'
import { connect } from 'react-redux';

const Item = ({
  id, 
  name,
  price, 
  model, 
  condition, 
  category, 
  dimensions, 
  created_at, 
  updated_at, 
  notes, 
  image }) => {
  return (
    <div className="item">
      <h1>{name}</h1>
        <ul>
        { name && <li>Name: {name}</li> }
        { price && <li>Price: {price}</li> }  
        { model && <li>Model: {model}</li> }
        { condition && <li>Condition: {condition}</li> }
        { category && <li>Category: {category}</li> }
        { dimensions && <li>Dimensions: {dimensions}</li> }
        { created_at && <li>Created at: {created_at}</li> }
        { updated_at && <li>Updated at: {updated_at}</li> }
        { image && <li>Image: {image}</li> }
        </ul>
      </div>
  )
}

export default Item