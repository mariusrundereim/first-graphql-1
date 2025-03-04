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
];

// Export Beer model methods
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
