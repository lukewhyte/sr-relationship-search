"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const user = (0, graphql_tag_1.default) `
  type Query {
    user(targetAddress: String!): User
  }

  type User {
    userAddress: String!
    userAvatarUri: String!
    userName: String!
    userProfileName: String!
    isCreator: Boolean!
    isCollector: Boolean!
  }
`;
exports.default = user;
