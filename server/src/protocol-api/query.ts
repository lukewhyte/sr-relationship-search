import { gql } from "../__generated__/";

export const GET_USER = gql(`
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
`)

export const GET_SALES_BY_TARGET = gql(`
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
`)

export const GET_COLLECTOR_BREAKDOWN = gql(`
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
`)
