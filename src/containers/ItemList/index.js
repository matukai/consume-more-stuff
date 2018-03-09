import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Item from '../../components/Item';
import {loadItems} from '../../actions/itemActions';


export default (props) => {

  const filter = `${props.filter}_id`;
  const items = props.items;
  
    return (
      <ul className="category-list">

        {items.filter((element) => {
          return element[filter] === props.id;
        })       
        .map((element,idx) => {
          return (
            <Link to={`/item/${element.id}`} key={idx} >
              <li>
                <div className="img-container">
                  {/* <img src="{element.image}" /> */}
                  <img src="https://images.unsplash.com/photo-1507697364665-69eec30ea71e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfc627dbcbcfca5026ad3f657a4a505f&auto=format&fit=crop&w=1951&q=80" />
                </div>
                <div className="item-info">
                  <p>{element.name}</p>
                  <p>{element.price}</p>
                </div>
              </li>
            </Link>
          )
        })}

      </ul>
    )
}
