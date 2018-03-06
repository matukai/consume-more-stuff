import { LOAD_ITEMS , CREATE_ITEM } from '../actions/itemActions';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  // console.log('REDUCER',state)
  switch (action.type) {
    case CREATE_ITEM:
      return {...state, newItem: action.item}
    case LOAD_ITEMS:
    
      return {...state, items: action.items}


    default:
      return state;
  }
}