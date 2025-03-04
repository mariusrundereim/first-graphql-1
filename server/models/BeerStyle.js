// In-memory data store for BeerStyles (replace with database later)
let beerStyles = [
  {
    id: "1",
    name: "American Pale Ale",
    description: "Hop-forward pale ale originating from the US",
    origin: "United States",
  },
  {
    id: "2",
    name: "Dry Stout",
    description: "Dark, dry, roasted artisanal stout from Ireland",
    origin: "Ireland",
  },
];

// Export BeerStyle model methods
export default {
  // Get all beer styles
  getAll: () => beerStyles,

  // Get beer style by ID
  getById: (id) => beerStyles.find((style) => style.id === id),

  // Add a new beer style
  add: (style) => {
    const id = String(beerStyles.length + 1);
    const newStyle = { id, ...style };
    beerStyles.push(newStyle);
    return newStyle;
  },
};
