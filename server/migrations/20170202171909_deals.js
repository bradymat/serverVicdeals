
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('deals', (t) => {
   t.increments('id')
   t.string('name')
   t.string('poster')
   t.string('deal')
   t.string('details')
   t.string('link')
   t.boolean('featured').defaultTo(false)
 })
}

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('deals')
