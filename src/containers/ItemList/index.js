import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Item from '../../components/Item';
// import {loadItems} from '../../actions/itemActions';


const ItemList = (props) => {
  console.log('props', props)
  const items = props.items;
  // const cat = `${props.filter}_id`;

    return (
      <div className="category-list">
        {
          items
          .filter((element) => {
            return element.cat === props.value;
          })       
          .map((element, idx) => {
            return (
              <Link to={`/item/${element.id}`} key={ idx } >
                <p>{ element.name }</p>
                <p>{ element.price }</p>
                <p>{ element.image }</p>
              </Link>

          )
        })}

      </div>
    )
}

export default ItemList
