import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from '../../components/Item';
import {loadItems} from '../../actions/itemActions';

class ItemList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.props.loadItems()
  }

  render() {
    return (
      <div className={this.props.category}>
        {this.props.items.map((element,idx) => {
          return (
            <Item 
            key={idx}
            id={element.id}
            name={element.name}
            price={element.price}
            model={element.model}
            category={element.category}
            dimensions={element.dimensions}
            created_at={element.created_at}
            updated_at={element.updated_at}
            image={element.image}
            />
          )
        })}

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

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)