
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('deals', (t) => {
   t.increments('id')
   t.string('name')
   t.string('poster')
   t.integer('price')
   t.integer('stock')
   t.boolean('deal').defaultTo(false)
 })
}

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('deals')
