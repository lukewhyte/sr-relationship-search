"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const core_1 = require("@apollo/client/core");
dotenv_1.default.config();
const apolloClient = new core_1.ApolloClient({
    uri: process.env.API_ENDPOINT,
    cache: new core_1.InMemoryCache(),
});
exports.default = apolloClient;
