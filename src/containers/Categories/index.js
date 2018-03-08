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

  componentWillReceiveProps(nextProps){
    if(nextProps.match.params.id !== this.props.category){
      const catId = this.props.match.params.id;
      this.props.getCategory(catId)
    }
  }

  render() {
    if(this.props.category.item){
      return (
        <div>
          <h2>Category: {this.props.category.category}</h2>
          <ItemList items={this.props.category.item}/>
        </div>
      )
    }
    return (
      <div></div>
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