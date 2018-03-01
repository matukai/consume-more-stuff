//SETUP

const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Smoke Test')
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})