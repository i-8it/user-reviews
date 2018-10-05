// models interacts directly with the database

const client = require('./connection');

module.exports = {
  getReviews: (nameOrId, cb) => {
    let numberQuery = (isNaN(parseInt(nameOrId)))
      ? false
      : true;

    if (!numberQuery) {
      nameOrId = nameOrId.replace(/-/g, ' ').replace(/(\d?\d?\d?\d?\d?\d?\d?\d?$)/, '#$1').toUpperCase();
    }

    console.log(`Send query: ${nameOrId}`);

    let query = `WITH myReviews AS (\
      SELECT * FROM reviews WHERE id IN (\
        SELECT rev FROM jointable WHERE rest=${numberQuery ? '$1' : '(SELECT id FROM restaurants WHERE name=UPPER($1))'}\
      )\
    )\
    SELECT * FROM myReviews INNER JOIN users ON myReviews.user_id = users.id;`;

    client.query(query,
      [nameOrId], (err, res) => {
        if (err) { console.log(err.stack); return; }
        let data = res.rows;
        data = data.map(obj => ({
          id: obj.id,
          useful_count: obj.useful_count,
          funny_count: obj.funny_count,
          cool_count: obj.cool_count,
          useful_clicked: obj.useful_clicked,
          funny_clicked: obj.funny_clicked,
          cool_clicked: obj.cool_clicked,
          ratings: Math.round(Math.random() * 100),
          reviewsCount: Math.round(Math.random() * 100),
          review: {
            count_starRatings: obj.starrating,
            date: obj.date,
            text_review: obj.text_review,
            count_checkin: obj.count_checkin,
            user: {
              name: obj.name,
              city: obj.city,
              state: obj.state,
              profile_image: obj.profile_image,
              count_friends: obj.count_friends,
              count_reviews: obj.count_reviews,
              count_photos: obj.count_photos,
            }
          }
        }));

        cb(data);
      }
    );
  }
};
