import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadSingleItem } from '../../actions/itemActions';

class SingleItem extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadSingleItem();
  }

  render() {
    return (
      <div>
        <h2>Item Detail View</h2>


      </div>
    )
  }

}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleItem: () => {
      dispatch(loadSingleItem());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleItem)