const express = require('express')
const router = express.Router()
const dealsDb = require('../db/deals')
/* GET users listing. */
router.get('/', function(req, res) {
  dealsDb.getDeals()
    .then((deals) => {
      res.json({deals}).status(200)
    })
    .catch((err) => {
      res.status(500)
    })
})

module.exports = router
