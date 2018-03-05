const express = require('express');
const Item = require('../db/models/Item');
const User = require('../db/models/User');
const UserStatus = require('../db/models/UserStatus');

const router = express.Router();

router.route('/:id/settings/')
  .get((req, res) => {
    let userId = req.params.id;

    return new User({id: userId})
      .fetch({withRelated: ['userStatus']}) 
      .then(user => {
        return res.json(user)
      })
      .catch(err => {
        return res.json({message: err.message})
      })
  })

  ///////route to change user password. to be completed- passport needs to be incorporated///////////
  // .put((req, res) => {
  //   let userId = req.params.id;
  //   let data = { password } = req.body

  //   return new User({id: userId})
  //     .save(data, {
  //       patch: true}
  //     )
  //     .then(user => {
  //       return res.json({success: true})
  //     })
  //     .catch(err => {
  //       return res.json({message: err.message})
  //     })
  // })

router.route('/:id/inactive/')
  .put((req, res) => {
    let userId = req.params.id;
    
    return new User({id: userId})
      .save({user_status_id: 2})
      .then(status => {
        return res.json({success: true})
      })
      .catch(err => {
        return res.json({message: err.message})
      })
  })


router.route('/:id')
  .get((req, res) => {
    let userId = req.params.id;
    return new Item()
      .query({where: {user_id: userId}})
      .fetchAll({withRelated: ['condition', 'category', 'itemStatus']})
      .then(user => {
        return res.json(user)
      })
      .catch(err => {
        return res.json({
          message: err.message
        })
      })
  })


module.exports = router;