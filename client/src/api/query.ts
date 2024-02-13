import { gql } from "../__generated__/";

export const GET_COLLECTORS = gql(`
  query GetCollectors($targetAddress: String!) {
    collectors(targetAddress: $targetAddress) {
      target {
        userAddress
        userAvatarUri
        userName
        userProfileName
        isCollector
        isCreator
      }
      source {
        userAddress
        userAvatarUri
        userName
        userProfileName
        isCollector
        isCreator
      }  
      nfts {
        universalTokenId
        metadata {
          title
          proxyImageSmallUri
          proxyImageMediumUri
          createdBy
        }  
      }
    }
  }
`)

export const GET_CREATORS = gql(`
  query GetCreators($targetAddress: String!) {
    creators(targetAddress: $targetAddress) {
      target {
        userAddress
        userAvatarUri
        userName
        userProfileName
        isCollector
        isCreator
      }
      source {
        userAddress
        userAvatarUri
        userName
        userProfileName
        isCollector
        isCreator
      }  
      nfts {
        universalTokenId
        metadata {
          title
          proxyImageSmallUri
          proxyImageMediumUri
          createdBy
        }  
      }
    }
  }
`)
