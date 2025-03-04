import beerResolvers from "./beerResolvers.js";
import styleResolvers from "./styleResolvers.js";

// Merge all resolvers
const resolvers = {
  Query: {
    ...beerResolvers.Query,
    ...styleResolvers.Query,
  },
  Mutation: {
    ...beerResolvers.Mutation,
    ...styleResolvers.Mutation,
  },
  Beer: beerResolvers.Beer,
  BeerStyle: styleResolvers.BeerStyle,
};

export default resolvers;
