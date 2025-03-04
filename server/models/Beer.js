let beers = [
  {
    id: "1",
    name: "Sierra Nevada Pale Ale",
    description: "A classic American pale ale with cascade hops",
    abv: 5.6,
    ibu: 38,
    styleId: "1",
  },
  {
    id: "2",
    name: "Guinness Draught",
    description: "Famous Irish dry stout",
    abv: 4.2,
    ibu: 45,
    styleId: "2",
  },
  {
    id: "3",
    name: "Heineken Lager",
    description: "Dutch lager beer",
    abv: 5,
    ibu: 23,
    styleId: "3",
  },
  {
    id: "4",
    name: "Budweiser",
    description: "American-style pale lager",
    abv: 5,
    ibu: 12,
    styleId: "4",
  },
  {
    id: "5",
    name: "Pilsner Urquell",
    description: "Czech pilsner",
    abv: 4.4,
    ibu: 40,
    styleId: "5",
  },
  {
    id: "6",
    name: "Chimay Blue",
    description: "Belgian strong dark ale",
    abv: 9,
    ibu: 35,
    styleId: "6",
  },
  {
    id: "7",
    name: "Weihenstephaner Hefeweissbier",
    description: "German hefeweizen",
    abv: 5.4,
    ibu: 14,
    styleId: "7",
  },
  {
    id: "8",
    name: "Duvel",
    description: "Belgian strong pale ale",
    abv: 8.5,
    ibu: 32,
    styleId: "8",
  },
  {
    id: "9",
    name: "Samuel Adams Boston Lager",
    description: "American amber lager",
    abv: 4.9,
    ibu: 30,
    styleId: "9",
  },
  {
    id: "10",
    name: "Newcastle Brown Ale",
    description: "English brown ale",
    abv: 4.7,
    ibu: 18,
    styleId: "10",
  },
];

export default {
  // Get all beers
  getAll: () => beers,

  // Get beer by ID
  getById: (id) => beers.find((beer) => beer.id === id),

  // Add a new beer
  add: (beer) => {
    const id = String(beers.length + 1);
    const newBeer = { id, ...beer };
    beers.push(newBeer);
    return newBeer;
  },

  // Get beers by style ID
  getByStyleId: (styleId) => beers.filter((beer) => beer.styleId === styleId),
};
