import { Beer, BeerStyle } from "../models/index.js";

const styleResolvers = {
  Query: {
    beerStyle: (_, { id }) => BeerStyle.getById(id),
    beerStyles: () => BeerStyle.getAll(),
  },
  BeerStyle: {
    // Resolve the beers field of BeerStyle
    beers: (parent) => Beer.getByStyleId(parent.id),
  },
  Mutation: {
    addBeerStyle: (_, { name, description, origin }) => {
      return BeerStyle.add({ name, description, origin });
    },
  },
};

export default styleResolvers;
