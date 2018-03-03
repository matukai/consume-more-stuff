


const initialState = [
  {
      id: 1,
      name: 'Toyota',
      price: 20000.00,
      model: '4 Runner',
      created_at: 98123891289,
      updated_at: 328222,
      condition: 'fair',
      category: 'vehicles',
      dimensions: '32 x 32',
      published: '0999404',
      updated: '91322938',
      notes: 'This is a car that is grey',
      image: '/images'
    },
  {
      id: 2,
      name: 'Aoytaot',
      price: 20000.00,
      model: '4 Runner',
      created_at: 383939,
      updated_at: 112312123,
      condition: 'fair',
      category: 'vehicles',
      dimensions: '32 x 32',
      published: '0999404',
      updated: '91322938',
      notes: 'This is a car that is grey',
      image: '/image'
    },
    {
      id: 2,
      name: 'Aoytaot',
      price: 20000.00,
      model: '4 Runner',
      created_at: 383939,
      updated_at: 112312123,
      condition: 'fair',
      category: 'appliances',
      dimensions: '32 x 32',
      published: '0999404',
      updated: '91322938',
      notes: 'This is a car that is grey',
      image: '/image'
    }
]


export default (state = initialState, action) => {
  switch (action.type) {


    default:
      return state;
  }
}