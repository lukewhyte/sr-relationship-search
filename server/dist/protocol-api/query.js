"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_COLLECTOR_BREAKDOWN = exports.GET_SALES_BY_TARGET = exports.GET_USER = void 0;
const __generated__1 = require("../__generated__/");
exports.GET_USER = (0, __generated__1.gql)(`
  query User($userAddresses: [String!]!) {
    user(userAddresses: $userAddresses) {
      isCollector
      isCreator
      userAddress
      userAvatarUri
      userName
      userProfileName
    }
  }
`);
exports.GET_SALES_BY_TARGET = (0, __generated__1.gql)(`
  query SalesByTarget($targetAddresses: [String!]!) {
    salesByTarget(targetAddresses: $targetAddresses) {
      buyer {
        isCollector
        isCreator
        userAddress
        userAvatarUri
        userName
        userProfileName
      }
      nft {
        universalTokenId
        metadata {
          title
          proxyImageSmallUri
          proxyImageMediumUri
          createdBy
        }
        creator {
          isCollector
          isCreator
          userAddress
          userAvatarUri
          userName
          userProfileName
        }
      }
      seller {
        userAddress
      }
    }
  }
`);
exports.GET_COLLECTOR_BREAKDOWN = (0, __generated__1.gql)(`
  query CollectorsArtists($targetAddress: String!, $pagination: PaginationInput!) {
    collectionBreakdown(targetAddress: $targetAddress, pagination: $pagination) {
      creator {
        userName
        userProfileName
        userAvatarUri
        userAddress
        isCreator
        isCollector
      }
    }
  }
`);
