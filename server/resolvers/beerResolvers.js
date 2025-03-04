import { Beer, BeerStyle } from "../models/index.js";

const beerResolvers = {
  Query: {
    beer: (_, { id }) => Beer.getById(id),
    beers: () => Beer.getAll(),
  },
  Beer: {
    // Resolve the style field of Beer
    style: (parent) => BeerStyle.getById(parent.styleId),
  },
  Mutation: {
    addBeer: (_, { name, description, abv, ibu, styleId }) => {
      return Beer.add({ name, description, abv, ibu, styleId });
    },
  },
};

export default beerResolvers;
