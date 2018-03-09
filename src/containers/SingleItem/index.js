import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadSingleItem } from '../../actions/itemActions';
import Item from '../../components/Item';
import EditItem from '../EditItem';
import { Link } from 'react-router-dom';

class SingleItem extends Component {
  constructor (props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    const itemId = this.props.match.params.id;
    this.props.loadSingleItem(itemId);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.item !== this.props.item) {
     return this.setState({...nextProps.item})
    }
  }

  render() {
    function isAuthorized(id, params)  {
      if (id !== parseInt(params)) {
        return false
      } else {
        return true
      }
      };

    const item = this.props.item;
    const loggedIn = JSON.parse(localStorage.getItem('user'));
    const userId = this.state.user_id;
 
    if (loggedIn) {
      return (
        <div className="detail-view">
          <h2>Item Detail View</h2>
          {
            isAuthorized(loggedIn.id, userId) ? <Link to={`edit-item/${this.props.match.params.id}`}>EDIT ITEM</Link>
              :null
          }
          <Item {...item}/>
        </div>
      )
    } else {
      return (
      <div className="detail-view">
          <h2>Item Detail View</h2>
          <Item {...item}/>
        </div>
        )
    }
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