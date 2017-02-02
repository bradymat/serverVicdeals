
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('deals').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('deals').insert({id: 1, name: 'Iron Man', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg', price: 20, stock: 3, deal: true}),
        knex('deals').insert({id: 2, name: 'Doctor Strange', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', price: 25, stock: 1, deal: true}),
        knex('deals').insert({id: 3, name: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg', price: 15, stock: 6, deal: false}),
        knex('deals').insert({id: 4, name: 'Westworld', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/luGF2ODxunHvDXWPRW9PjywIvuD.jpg', price: 20, stock: 13, deal: true}),
        knex('deals').insert({id: 5, name: 'Fantastic Beasts', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/9HE9xiNMEFJnCzndlkWD7oPfAOx.jpg', price: 25, stock: 3, deal: false}),
        knex('deals').insert({id: 6, name: 'Hanna', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/2Jr4Rl4Hjiahgh09bjeH8tFhgKp.jpg', price: 20, stock: 4, deal: true}),
        knex('deals').insert({id: 7, name: 'Arival', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4Iu5f2nv7huqvuYkmZvSPOtbFjs.jpg', price: 25, stock: 9, deal: false}),
        knex('deals').insert({id: 8, name: 'Jack Reacher', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg', price: 20, stock: 7, deal: false}),
        knex('deals').insert({id: 9, name: 'Snowden', poster: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/mWOotrG1MMKP9iCy2uPepbu27jk.jpg', price: 15, stock: 10, deal: true}),
        knex('deals').insert({id: 10, name: 'Daredevil', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/itrCovJkuH7I8SJ98jxrInnwm2y.jpg', price: 20, stock: 2, deal: false}),
        knex('deals').insert({id: 11, name: 'Mad Max: Fury Road', poster: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/kqjL17yufvn9OVLyXYpvtyrFfak.jpg', price: 25, stock: 10, deal: false}),
        knex('deals').insert({id: 12, name: 'Star Wars: The Force Awakens', poster: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg', price: 20, stock: 10, deal: false}),
        knex('deals').insert({id: 13, name: 'Kill Bill: Vol. 1', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/vdENJAPObttowMtIwe9jgtbsEnq.jpg', price: 25, stock: 13, deal: false}),
        knex('deals').insert({id: 14, name: 'Kill Bill: Vol. 2', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg', price: 20, stock: 7, deal: false}),
        knex('deals').insert({id: 15, name: 'Reservoir Dogs ', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ctv9pxKpwjTFevWQbvaqXkXbPF.jpg', price: 15, stock: 10, deal: false})
      ]);
    });
};
