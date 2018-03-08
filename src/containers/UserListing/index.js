import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserItems } from '../../actions/itemActions';
import ItemList from '../../containers/ItemList';
import ItemStatus from '../../components/ItemStatus';

class UserListing extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.getUserItems(userId)
  }

  render() {
    console.log(this.props.items)
    return (
      <div>
        <h1>HELLO USER</h1>

          <div className="status-published">
            <h2>PUBLISHED ITEMS: </h2>
            <ItemStatus items={this.props.items} itemStatus={1}/>
          </div>

          <div className="status-pending">
            <h2>PENDING ITEMS: </h2>
            <ItemStatus items={this.props.items} itemStatus={2}/>
          </div>

          <div className="status-sold">
            <h2>SOLD ITEMS: </h2>
            <ItemStatus items={this.props.items} itemStatus={3}/>
          </div>

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
    getUserItems: (id) => {
      dispatch(getUserItems(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserListing)