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
  {
    id: "3",
    name: "Lager",
    description: "Clean, crisp, refreshing beer style",
    origin: "Germany",
  },
  {
    id: "4",
    name: "Pale Lager",
    description: "Light, golden lager with a mild flavor",
    origin: "Czech Republic",
  },
  {
    id: "5",
    name: "Pilsner",
    description: "Crisp, golden lager with a distinct hop flavor",
    origin: "Czech Republic",
  },
  {
    id: "6",
    name: "Strong Ale",
    description: "High-alcohol, full-bodied beer style",
    origin: "Belgium",
  },
  {
    id: "7",
    name: "Hefeweizen",
    description: "Unfiltered wheat beer with a clove and banana aroma",
    origin: "Germany",
  },
  {
    id: "8",
    name: "Belgian Golden Ale",
    description: "Strong, pale ale with a fruity and spicy character",
    origin: "Belgium",
  },
  {
    id: "9",
    name: "IPA",
    description: "Hoppy, bitter, and strong ale style",
    origin: "United Kingdom",
  },
  {
    id: "10",
    name: "Porter",
    description: "Dark, malty beer with a roasted flavor",
    origin: "United Kingdom",
  },
  {
    id: "11",
    name: "Stout",
    description: "Dark, rich, and creamy beer style",
    origin: "United Kingdom",
  },
  {
    id: "12",
    name: "Witbier",
    description: "Belgian-style wheat beer with orange and coriander",
    origin: "Belgium",
  },
  {
    id: "13",
    name: "Saison",
    description: "Farmhouse ale with a fruity and spicy character",
    origin: "Belgium",
  },
  {
    id: "14",
    name: "Barleywine",
    description: "Strong ale with a high alcohol content",
    origin: "United Kingdom",
  },
  {
    id: "15",
    name: "Doppelbock",
    description: "Strong, malty German lager beer",
    origin: "Germany",
  },
  {
    id: "16",
    name: "Tripel",
    description: "Strong, pale Belgian ale with a fruity and spicy",
    origin: "Belgium",
  },
];

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
