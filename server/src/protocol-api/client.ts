import dotenv from 'dotenv'
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

dotenv.config()

const apolloClient = new ApolloClient({
  uri: process.env.API_ENDPOINT,
  cache: new InMemoryCache(),
});

export default apolloClient
