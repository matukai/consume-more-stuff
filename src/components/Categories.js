import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

import { getCategory } from '../actions/itemActions';
import ItemList from '../containers/ItemList';

// import Item from '../components/Item';

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  
  }

  componentWillMount() {
    const catId = this.props.match.params.id
    console.log('componentdidmount', catId)
    this.props.getCategory(catId)
  }
  
  render() {
    console.log('render props', this.props.items)
    const categories = this.props.items || {}

    const catId = this.props.match.params.id
    return (

      <div className="categories"> categories
        {/* <ItemList {...items} /> */}
        {/* <div className="item-category">{ }</div> */}
        {/* <ItemList items={ itemsArr } filter={"category"} value={ catId }/>   */}
      </div>
    )
  }
}  

const mapStateToProps = state => {
  console.log('mapstate', state.items.categories) 
  return {
    categories: state.items.categories
  }
}

const mapDispatchToProps = dispatch => {
  console.log('mapdispatch', dispatch)
  return {
    getCategory: (id) => {
      dispatch(getCategory(id))
    }
  }
}

const ConnectedCategories = connect (
  mapStateToProps,
  mapDispatchToProps
)(Categories)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories))
