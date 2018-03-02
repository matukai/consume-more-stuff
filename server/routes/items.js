const express = require('express');
const Item = require('../db/models/Item');

const router = express.Router();

router.route('/new')
  .post((req, res) => {
    let data = {
      name, price, model, dimensions,
       notes, user_id, image
    } = req.body;
    return new Item(data)
      .save()
      .then(item => {
        return res.json(item)
      })
      .catch(err => {
        return res.json({
          message: err.message
        })
      })
  })

router.route('/:id')
  .get((req, res) => {
    let itemId = req.params.id;

    return new Item({
        id: itemId
      })
      .fetch()
      .then(item => {
        return res.json(item)
      })
      .catch(err => {
        return res.json({
          message: err.message
        })
      })
  })
  .put((req, res) => {
    let itemId = req.params.id;

    let data = {
      name, price, model, dimensions,
      notes, image
    } = req.body;

    return new Item({
        id: itemId
      })
      .save(data, {
        patch: false
      })
      .then(item => {
        return res.json(item)
      })
      .catch(err => {
        return res.json({
          message: err.message
        })
      })
  })

router.route('/')
  .get((req, res) => {
    return new Item()
      .fetchAll()
      .then(items => {
        return res.json(items)
      })
      .catch(err => {
        return res.json({message: err.message})
      })
  })

module.exports = router;