Seed script

Running generateRestaurants.js or generateReviews.js in node creates entries
in batches of 1,000,000 or 500,000, respectively. Pass in a number as the
first argument to define output filename. For example:

"node generateJSON.js 1" outputs "reviews01.json"
and then to get the next batch, run:
"node generateJSON.js 2" to get "reviews02.json"
and so on.
