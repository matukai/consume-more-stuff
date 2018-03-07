import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

import { loadItems, getCategory } from '../actions/itemActions';
import ItemList from '../containers/ItemList';

// import Item from '../components/Item';

class Categories extends Component {
  constructor(props) {
    super(props)
      this.state = {
        categories: []
      }
  }

  componentDidMount() {
    console.log('componentdidmount', this.props)
  }
  
  render() {
    const catId = this.props.match.params.id
    return (
      <div className="bitchtits">
        <div className="item-category">{ this.props.category }</div>
        <ItemList items={ this.props.items} filter={"category"} value={ catId }/>  
      </div>
    )
  }
}  

const mapStateToProps = state => {
  return {
    items: state.items.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadItems: () => {
      dispatch(loadItems())
    }
  }
}

const ConnectedCategories = connect (
  mapStateToProps,
  mapDispatchToProps
)(Categories)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories))
