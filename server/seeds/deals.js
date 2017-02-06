
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('deals').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('deals').insert({name: 'Uber', poster: 'https://d1a3f4spazzrp4.cloudfront.net/facebook/hd_shareimage.png', deal: '$20 credit', details: "Get $20 FREE credit when you sign up with promo code VICDEALS", link:'https://get.uber.com/sign-up' ,featured: true}),
        knex('deals').insert({name: 'Big Pipe', poster: 'https://pbs.twimg.com/profile_images/432660351885119488/2Apqic-q.png', deal: '$10 off per month', details: "No contract options! Sign up with promo code VICDEALS for $10 off a month ", link:'https://bigpipe.co.nz/vicdeals', featured: true})
      ]);
    });
};
