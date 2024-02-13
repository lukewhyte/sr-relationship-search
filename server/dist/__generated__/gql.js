"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gql = void 0;
/* eslint-disable */
const types = __importStar(require("./graphql"));
/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query User($userAddresses: [String!]!) {\n    user(userAddresses: $userAddresses) {\n      isCollector\n      isCreator\n      userAddress\n      userAvatarUri\n      userName\n      userProfileName\n    }\n  }\n": types.UserDocument,
    "\n  query SalesByTarget($targetAddresses: [String!]!) {\n    salesByTarget(targetAddresses: $targetAddresses) {\n      buyer {\n        isCollector\n        isCreator\n        userAddress\n        userAvatarUri\n        userName\n        userProfileName\n      }\n      nft {\n        universalTokenId\n        metadata {\n          title\n          proxyImageSmallUri\n          proxyImageMediumUri\n          createdBy\n        }\n        creator {\n          isCollector\n          isCreator\n          userAddress\n          userAvatarUri\n          userName\n          userProfileName\n        }\n      }\n      seller {\n        userAddress\n      }\n    }\n  }\n": types.SalesByTargetDocument,
    "\n  query CollectorsArtists($targetAddress: String!, $pagination: PaginationInput!) {\n    collectionBreakdown(targetAddress: $targetAddress, pagination: $pagination) {\n      creator {\n        userName\n        userProfileName\n        userAvatarUri\n        userAddress\n        isCreator\n        isCollector\n      }\n    }\n  }\n": types.CollectorsArtistsDocument,
};
function gql(source) {
    return documents[source] ?? {};
}
exports.gql = gql;
