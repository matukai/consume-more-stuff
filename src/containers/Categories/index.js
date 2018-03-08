import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../../actions/itemActions';
import ItemList from '../ItemList';

class Categories extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const catId = this.props.match.params.id;
    this.props.getCategory(catId)
  }

  render() {
    console.log('INDEX',this.props.category)
    return (
      <div>
        <h2>Category: </h2>
        <ItemList items={this.props.category}/>

      </div>
    )
  }
}  

const mapStateToProps = state => {
  return {
    category: state.items.category
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategory: (id) => {
      dispatch(getCategory(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Categories)
