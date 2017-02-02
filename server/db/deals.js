const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

const knex = Knex(knexConfig)

const getDeals () => knex('deals')

module.exports = {
  getDeals
}
