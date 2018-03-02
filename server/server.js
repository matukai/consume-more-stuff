//SETUP

const express = require('express');
const bodyParser = require('body-parser');

const usersRoute = require('./routes/users');
const itemsRoute = require('./routes/items');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Smoke Test')
});

// router.route('/register')
//   .post((req, res) => {
//     let data = {
//       email,
//       username,
//       password
//     } = req.body;

//     return new User(data)
//       .save()
//       .then(user => {
//         return res.json(user)
//       })
//       .catch(err => {
//         return res.json({
//           message: err.message
//         })
//       })
//   })

// router.route('/login')
//   .post((req, res) => {
//     let userInfo = {
//       email,
//       username,
//       password
//     } = req.body;

//     return new User(userInfo)
//       .fetchAll()
//       .then(user => {
//         return res.json({
//           success: true
//         })
//       })
//       .catch(err => {
//         return res.json({
//           message: err.message
//         })
//       })
//   })

app.use('/api/items', itemsRoute);
app.use('/api/users', usersRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})