import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/index.js";
import resolvers from "./resolvers/index.js";
// import { startStandaloneServer } from "@apollo/server/standalone";

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
// const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
// console.log(`🍺 Beer GraphQL Server running at ${url}`);
