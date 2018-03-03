import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from '../../components/Item';


class ItemList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }



  render() {
    return (
      <div className={this.props.category}>
        {this.props.items.filter((element) => {
          return element.category === this.props.category
        }).map((element,idx) => {
          return (
            <Item
            key={idx}
            id={element.id}
            name={element.name}
            price={element.price}
            model={element.model}
            condition={element.condition}
            category={element.category}
            dimensions={element.dimensions}
            created_at={element.created_at}
            updated_at={element.updated_at}
            notes={element.notes}
            image={element.image}
            />)})}
      </div>
    )
  }
}

    const mapStateToProps = state => {
      return {
        items: state.items
      }
    }

    const mapDispatchToProps = dispatch => {
      return {

      }
    }

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)