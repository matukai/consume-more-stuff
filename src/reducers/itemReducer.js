import { LOAD_ITEMS , CREATE_ITEM, GET_CAT } from '../actions/itemActions';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case CREATE_ITEM:
      return {...state, newItem: action.item}

    case LOAD_ITEMS:
      return {...state, items: action.items}
    
    case GET_CAT:
     return {...state, categories: action.categories}


    default:
      return state;
  }
}
