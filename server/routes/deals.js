const express = require('express')
const router = express.Router()
const dealsDb = require('../db/deals')

router.get('/', function(req, res) {
  dealsDb.getDeals()
    .then((deals) => {
      res.json({deals}).status(200)
    })
    .catch((err) => {
      res.status(500)
    })
})

router.post('/', function(req, res){
  console.log(req.body);
  dealsDb.addDeal(req.body)
    .then((dealInfo) => {
      res.json({dealInfo}).status(201)
    })
    .catch((err) => {
      res.status(500)
    })
})

module.exports = router
