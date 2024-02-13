"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const collectors_1 = __importDefault(require("./collectors"));
const nft_1 = __importDefault(require("./nft"));
const user_1 = __importDefault(require("./user"));
const creators_1 = __importDefault(require("./creators"));
const typeDefs = (0, graphql_tag_1.default) `
  input PaginationInput {
    offset: Int!
    limit: Int!
    sortBy: String
    order: SortOrder
  }

  enum SortOrder {
    ASC
    DESC
  }

  type Relationship {
    target: User!
    source: User!
    nfts: [Nft!]!
  }

  ${user_1.default}
  ${nft_1.default}
  ${collectors_1.default}
  ${creators_1.default}
`;
exports.default = typeDefs;
