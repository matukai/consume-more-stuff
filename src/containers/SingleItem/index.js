import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadSingleItem } from '../../actions/itemActions';
import ItemDetail from '../../components/ItemDetail';
import Item from '../../components/Item';


class SingleItem extends Component {
  constructor (props) {
    super(props)

    this.state = {name: '', price: '', model: '', dimensions: '',
   notes: '', category_id: '', condition_id: '', item_status_id: '',
   image: ''};
   
  }

  componentWillMount() {
    const itemId = this.props.match.params.id;
    this.props.loadSingleItem(itemId);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.item !== this.props.item) {
     return this.setState({...nextProps.item})
    }
  }

  render() {
    //console.log('SINGLE ITEM',this.props.item)
    //console.log(this.state)
    return (
      <div className="detail-view">
        <h2>Item Detail View</h2>
        <ItemDetail item={this.state}/>

        {/* <ItemDetail item={this.props}/> */}
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    item: state.items.item
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleItem: (id) => {
      dispatch(loadSingleItem(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleItem)