import { logger } from './common/winston'
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from './api/typedefs/main';
import resolvers from './api/resolvers/main';

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    formatError: (err) => {
      logger.error(err)
      return new Error('An Error Occured')
    },
  });
  const { url } = await startStandaloneServer(server);
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
