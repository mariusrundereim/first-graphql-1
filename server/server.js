import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/index.js";
import resolvers from "./resolvers/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  cors: {
    origin: "*", // Development mode
    credentials: true,
  },
});

server.listen().then(({ url }) => {
  console.log(`🍺 Beer GraphQL Server running at ${url}`);
});
