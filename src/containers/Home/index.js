import React, {Component} from 'react';
import {connect} from 'react-redux';
import ItemList from '../ItemList/index';


class Home extends Component {
  constructor(props){
    super(props)
  }


render() {
  
  return (
    <div>

      <ItemList category={'vehicles'}/>
      <ItemList category={'appliances'}/>
      <ItemList category={'computers'}/>
      <ItemList category={'furniture'}/>

    </div>
  )
}



}// end Home 

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);