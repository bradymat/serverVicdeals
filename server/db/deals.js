const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

const knex = Knex(knexConfig)

function getDeals () {
  return knex('deals')
}

function addDeal (deal) {
  return knex('deals').insert({name: 'Passenger', poster: 'https://image.tmdb.org/t/p/original/5gJkVIVU7FDp7AfRAbPSvvdbre2.jpg', price: 15, stock: 6})
}

module.exports = {
  getDeals,
  addDeal
}
