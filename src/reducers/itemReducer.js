import { LOAD_ITEMS , CREATE_ITEM, GET_CAT } from '../actions/itemActions';

const initialState = {
  items: [],
  categories: []
};

export default (state = initialState, action) => {
  // console.log('REDUCER',state)
  switch (action.type) {

    case CREATE_ITEM:
      return {...state, newItem: action.item}

    case LOAD_ITEMS:
      console.log('loadreducer', action.items);
      return {...state, items: action.items}
    
    case GET_CAT:
      console.log('categoryreducer', action.categories.category)
      return {...state, categories: action.categories}


    default:
      return state;
  }
}
