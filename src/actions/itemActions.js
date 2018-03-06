import axios from 'axios';


export const CREATE_ITEM = 'CREATE_ITEM';
export const LOAD_ITEMS = 'CREATE_ITEM';
export const EDIT_ITEMS = 'EDIT_ITEM';


export const loadItems = () => {
  return (dispatch) => {
    axios.get('http://localhost:8080/api/items')
    .then((response) => {
      console.log(dispatch(response))
    }).catch((err) => {
      console.log(err)
    })
  }
}


export const createItem = (newItem, redirectCallback) => {
  console.log(newItem)
    return dispatch => {
      return axios.post('http://localhost:8080/api/items/new', {
        name: newItem.name,
        image: newItem.image,
        price: newItem.price,
        condition_id: newItem.condition,
        category_id: newItem.category,
        item_status_id: 1,
        model: newItem.model,
        user_id: 1,
        dimensions: newItem.dimensions ,
        notes: newItem.notes
      })
      .then(json => {
        console.log(json)
          dispatch({
          type: CREATE_ITEM,
          item: json.data
        });
        redirectCallback();
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }




export const editItem = (item) => {

}