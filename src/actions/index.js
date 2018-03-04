import axios from 'axios';

export const CREATE_ITEM = 'CREATE_ITEM';


export const createItem = (newItem) => {
  console.log(newItem)
  axios.post('http://localhost:8080/api/items/new', {
    name: 'I ME ADDING',
    image: '',
    price: '',
    condition: '',
    category: '',
    model: '',
    dimensions: '',
    notes: ''
  })
  .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
}