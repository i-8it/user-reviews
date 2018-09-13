const faker = require("faker");
var mockData = [];

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

var restaurant = function() {
  this.name = business[Math.floor(Math.random() * business.length)];
  this.review = {};
  this.review.count_starRatings = faker.random.number({
    min: 1,
    max: 5
  });
  this.review.date = faker.date.recent();
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

module.exports = mockData;
