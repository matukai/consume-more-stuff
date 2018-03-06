import { LOAD_ITEMS , CREATE_ITEM } from '../actions/itemActions';

const initialState = []

export default (state = initialState, action) => {

  switch (action.type) {
    case CREATE_ITEM:
      return {...state, newItem: action.item}

    default:
      return state;
  }
}