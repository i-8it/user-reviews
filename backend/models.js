// models interacts directly with the database

const client = require('./connection');

module.exports = {
  getReviews: (nameOrId, cb) => {
    let numberQuery = (isNaN(parseInt(nameOrId)))
      ? false
      : true;

    if (!numberQuery) {
      nameOrId = nameOrId.replace(/-(\d\d?\d?\d?\d?\d?\d?\d?$)/, '-#$1').replace(/-/g, ' ').toLowerCase();
      console.log(nameOrId);
    }

    // console.log(`GET: ${nameOrId}`);

    let query = `WITH myReviews AS (\
      SELECT DISTINCT * FROM reviews WHERE id IN (\
        SELECT rev FROM jointable WHERE rest=${numberQuery ? '$1' : '(SELECT id FROM restaurants WHERE name=$1)'}\
      )\
    )\
    SELECT * FROM myReviews INNER JOIN users ON myReviews.user_id = users.id;`;
/*
    WITH myReviews AS (SELECT DISTINCT * FROM reviews WHERE id IN (SELECT rev FROM jointable WHERE rest=(SELECT id FROM restaurants WHERE name=UPPER("SMITHAM'S GENERIC PRACTICAL FRESH CHICKEN")))) SELECT * FROM myReviews INNER JOIN users ON myReviews.user_id = users.id;
    SELECT id FROM restaurants WHERE name=UPPER('SPORER''S HANDMADE REFINED RUBBER CHEESE #87');
SPORER'S-HANDMADE-REFINED-RUBBER-CHEESE-87
*/

// console.log(query);

    client.query(query,
      [nameOrId], (err, res) => {
        if (err) { console.log(err.stack); return; }
        // console.log(res);
        let data = res.rows.map(obj => ({
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
            text_review: obj.text_review + ' ',
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
  },
  editReview: (req, cb) => {
    // UPDATE reviews set useful_clicked=0, funny_clicked=0, cool_clicked=0 WHERE id=111111;
    let nameOrId = req.params.nameOrId;
    console.log(req.query);
    // console.log(params);
    if (Object.keys(req.query).length > 0) {
      let params = Object.entries(req.query).map(arr => `${arr[0]}='${arr[1]}'`).join(',');

      let rowToChange = (!isNaN(nameOrId))
        ? nameOrId
        : '(SELECT id FROM restaurants WHERE name=$1)';
      // SELECT id FROM restaurants WHERE name=LOWER($1)

      let query = `UPDATE reviews SET ${params} where id=${rowToChange};`;
      console.log(query);
      client.query(query, (err, res) => {
        if (err) { console.log(err.stack); return; }
        cb(res);
        console.log('successfully updated!');
        // console.log(res);
      });
    }
  }
};



/*
Turners-Tasty-Small-Wooden-Bike-326834
Balistreris-Refined-Licensed-Frozen-Mouse-326835
Hacketts-Practical-Incredible-Rubber-Computer-326836
Lowes-Small-Generic-Metal-Computer-326837
Joness-Sleek-Tasty-Concrete-Hat-326838
McGlynns-Incredible-Handcrafted-Rubber-Tuna-326839
Toys-Licensed-Awesome-Cotton-Chair-326840
Padbergs-Practical-Generic-Fresh-Pizza-326841
Blandas-Intelligent-Licensed-Fresh-Car-326842
Dietrichs-Tasty-Incredible-Frozen-Chair-326843
*/
