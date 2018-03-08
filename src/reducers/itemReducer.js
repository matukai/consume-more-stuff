import { LOAD_ITEMS , CREATE_ITEM, GET_CAT, LOAD_SINGLE_ITEM, GET_USER_ITEMS} from '../actions/itemActions';

const initialState = {
  items: [],
  userItems: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case CREATE_ITEM:
      return {...state, newItem: action.item}

    case LOAD_ITEMS:
      return {...state, items: action.items}
    
    case GET_CAT:
     return {...state, categories: action.categories}

    case LOAD_SINGLE_ITEM:
      return {...state, item: action.item}

    case GET_USER_ITEMS:
    // console.log(action.userItems)
      return {...state, items: action.userItems}

    default:
      return state;
  }
}
