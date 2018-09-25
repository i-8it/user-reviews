const faker = require("faker");
var mockData = [];
const fs = require("fs");
const path = require("path");
var business = [
  "Minhas Micro Brewery",
  "CK'S BBQ & Catering",
  "La Bastringue",
  "The Coffee Bean & Tea Leaf",
  "Bnc Cake House",
  "Thai One On",
  "Filiberto's Mexican Food",
  "Sushi 8",
  "Southern Accent Restaurant",
  "Original Hamburger Works",
  "Mysore Indian Cuisine",
  "Safeway Food & Drug",
  "Harlow",
  "CakesbyToi",
  "Rally's Hamburgers",
  "Rib Shop",
  "Mabel's Bakery",
  "Salsitas",
  "Los Toros Numero 2",
  "The Coffee Mill Restaurant",
  "Teresas Pizzeria",
  "Chicken Lips",
  "Subway",
  "Omelet House Summerlin",
  "Crossroads Country Cafe'",
  "Strickland's Ice Cream",
  "John John's Seafood",
  "Little Caesars Pizza",
  "Dunkin Donuts",
  "Kim Phat Inc",
  "Manuel's Mexican Restaurant & Cantina - Bell Rd",
  "La Rosa Chilena",
  "Junior's Pizzeria",
  "Subway",
  "Baja Fresh Mexican Grill",
  "China Palace",
  "Allwyn's Bakery",
  "Fornetti",
  "Provence Bakery",
  "Ice Cream Patio",
  "Hub Coffee House & Locavorium",
  "Pizza Bellagio",
  "Regino's Pizza",
  "Avenue Deli",
  "More Than Pies Baking",
  "Indian Street Food Company",
  "Jack's Liquor",
  "Tipsy Ryde",
  "Wendy's",
  "McDonalds",
  "Fat Ox",
  "Tang Dynasty Restaurant And Bar",
  "Sammy's Beach Bar & Grill",
  "Harvey's Restaurants",
  "Honey's Beestro",
  "The Nest",
  "Applebee's Grill + Bar",
  "Anchor Bar",
  "I Wings",
  "Frite Alors",
  "Vocé Ristorante and Lounge",
  "Whiskey Rose Bar & Grill",
  "Popeyes Louisiana Kitchen",
  "Wing's Express",
  "Pizza Hut",
  "Sansei Japan",
  "Burrito Boyz",
  "L2 Lounge",
  "Chan Yang",
  "Long John Silver's",
  "Sunny Foodmart",
  "Weinkontor",
  "Loblaws",
  "Seasonal Adventures Pumpkin Patch",
  "Carte Blanche",
  "Schlotzsky's",
  "A & A International Food",
  "Arby's",
  "Higley Hot Dog Hut",
  "Pho 198",
  "Sweet Mahal",
  "La Cabana",
  "Hooters",
  "Boston Market",
  "Sauter's Inn Restaurant",
  "El Pollo Loco",
  "Ave Maria Latin Café",
  "Dave's Surf & Turf",
  "Popeyes Louisiana Kitchen",
  "Chicago Deep Dish Pizza",
  "Quesada Mexican Grill",
  "Great Wall",
  "Ten Feet Tall",
  "Velvet Sunrise Coffee Roasters",
  "Caspian Cafe & Catering",
  "Giulietta",
  "Sea Hut",
  "Chicago Brewing Company",
  "Port of Subs",
  "Chef's Cafe"
];
var increment = 1;
var newArr = [];
business.forEach(bizz => {
  newArr.push([bizz.toLowerCase(), increment]);
  increment++;
});

var restaurant = function() {
  var resName = newArr[Math.floor(Math.random() * newArr.length)];
  this.name = resName[0];
  this.id = resName[1];
  this.ratings = faker.random.number({
    min: 1,
    max: 5
  });
  this.reviewsCount = faker.random.number({
    min: 0,
    max: 750
  });
  this.useful_count = faker.random.number({
    min: 0,
    max: 3
  });
  this.funny_count = faker.random.number({
    min: 0,
    max: 3
  });
  this.cool_count = faker.random.number({
    min: 0,
    max: 3
  });
  this.useful_clicked = false;
  this.funny_clicked = false;
  this.cool_clicked = false;
  this.review = {};
  this.review.count_starRatings = faker.random.number({
    min: 1,
    max: 5
  });
  this.review.date = faker.date.between("2015-01-01", "2018-9-30");
  this.review.text_review = faker.lorem.paragraph();
  this.review.count_checkin = faker.random.number({
    min: 0,
    max: 8
  });
  this.review.user = {};
  this.review.user.name = faker.name.findName();
  this.review.user.city = faker.address.city();
  this.review.user.state = faker.address.stateAbbr();
  this.review.user.profile_image = faker.image.avatar();
  this.review.user.count_friends = faker.random.number({
    min: 0,
    max: 750
  });
  this.review.user.count_reviews = faker.random.number({
    min: 0,
    max: 450
  });
  this.review.user.count_photos = faker.random.number({
    min: 0,
    max: 150
  });
};

for (var i = 0; i < 500; i++) {
  let rest = new restaurant();
  mockData.push(rest);
}

// module.exports = mockData;
fs.writeFile(
  path.join(__dirname, "seeds", "restaurants.json"),
  JSON.stringify(mockData),
  err => {
    if (err) {
      return console.log(err);
    }
  }
);
