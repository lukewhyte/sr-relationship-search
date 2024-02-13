"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("./common/winston");
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const main_1 = __importDefault(require("./api/typedefs/main"));
const main_2 = __importDefault(require("./api/resolvers/main"));
async function startApolloServer() {
    const server = new server_1.ApolloServer({
        typeDefs: main_1.default,
        resolvers: main_2.default,
        introspection: true,
        formatError: (err) => {
            winston_1.logger.error(err);
            return new Error('An Error Occured');
        },
    });
    const { url } = await (0, standalone_1.startStandaloneServer)(server);
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}
startApolloServer();
