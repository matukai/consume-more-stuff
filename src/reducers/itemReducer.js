import { LOAD_ITEMS , CREATE_ITEM, GET_CAT } from '../actions/itemActions';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  // console.log('REDUCER',state)
  switch (action.type) {

    case CREATE_ITEM:
      return {...state, newItem: action.item}

    case LOAD_ITEMS:
      console.log(action.items);
      return {...state, items: action.items}
    
    case GET_CAT:
     return {...state, categories: action.categories}


    default:
      return state;
  }
}
