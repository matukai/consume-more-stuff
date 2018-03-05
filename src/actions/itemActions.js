import axios from 'axios';

export const CREATE_ITEM = 'CREATE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

export const createItem = (newItem) => {
  console.log('CREATE ITEM BEFORE POST', newItem)
  axios.post('http://localhost:8080/api/items/new', {
    name: newItem.name,
    image: newItem.image,
    price: newItem.price,
    condition: newItem.condition,
    category: newItem.category,
    model: newItem.model,
    dimensions: newItem.dimensions ,
    notes: newItem.notes
  })
  .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const editItem = (editedItem) => {
  console.log('EDIT ITEM BEFORE PUT', editedItem)
  axios.put('http://localhost:8080/api/items/')
}