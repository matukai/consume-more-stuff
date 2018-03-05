import axios from 'axios';

export const CREATE_ITEM = 'CREATE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

export const createItem = (newItem) => {
  console.log('CREATE ITEM BEFORE POST', newItem.price)
  console.log
  
  const test = {
    name : newItem.name,
    price : newItem.price,
    condition_id : 2,
    category_id : 1,
    item_status_id : 2,
    model : "ikea",
    user_id : 1,
    dimensions : "420 x 420",
    notes : "you sit in it",
    image : "/image"
  }


  axios.post('http://localhost:8080/api/items/new',
  {
    name: newItem.name,
    image: newItem.image,
    price: newItem.price,
    condition_id: 1,
    category_id: 1,
    item_status_id: 1,
    model: newItem.model,
    user_id: 1,
    dimensions: newItem.dimensions ,
    notes: newItem.notes
  }
)
  .then((response) => {
    console.log(response)
    return response.json()
  })
  .catch((err) => {
    console.log(err)
  })
}

export const editItem = (editedItem) => {
  console.log('EDIT ITEM BEFORE PUT', editedItem)
  axios.put('http://localhost:8080/api/items/')
}