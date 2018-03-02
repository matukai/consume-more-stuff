const express = require('express');
const User = require('../db/models/User');
const Item = require('../db/models/Item');
const UserStatus = require('../db/models/UserStatus');
const router = express.Router();



router.route('/settings/:id')
  .get((req, res) => {
    let userId = req.params.id;

    return new User({id: userId})
      .fetchAll() 
      .then(user => {
        return res.json(user)
      })
      .catch(err => {
        return res.json({message: err.message})
      })
  })
  .put((req, res) => {
    let userId = req.params.id;
    let data = { password } = req.body

    return new User({id: userId})
      .save(data, {
        patch: false}
      )
      .then(user => {
        return res.json({success: true})
      })
      .catch(err => {
        return res.json({message: err.message})
      })
  })

router.route('/archive/:id')
  .put((req, res) => {
    let userId = req.params.id;
    
    return new UserStatus({user_id: userId})
      .save({status: 'archive'})
      .then(status => {
        return res.json({success: true})
      })
      .catch(err => {
        return res.json({message: err.message})
      })
  })


router.route('/:id')
  .get((req, res) => {
    let userId = req.body.id;
    return new Item({
        user_id: userId
      })
      .fetchAll()
      .then(user => {
        return res.json(user)
      })
      .catch(err => {
        return res.json({
          message: err.message
        })
      })
  })

// router.route('/logout')--will address logout upon authentication


module.exports = router;