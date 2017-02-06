const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

const knex = Knex(knexConfig)

function getDeals () {
  return knex('deals')
}

function addDeal (deal) {
  return knex('deals').insert(deal)
}

module.exports = {
  getDeals
}
