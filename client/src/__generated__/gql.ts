/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n  query GetCollectors($targetAddress: String!) {\n    collectors(targetAddress: $targetAddress) {\n      target {\n        userAddress\n        userAvatarUri\n        userName\n        userProfileName\n        isCollector\n        isCreator\n      }\n      source {\n        userAddress\n        userAvatarUri\n        userName\n        userProfileName\n        isCollector\n        isCreator\n      }  \n      nfts {\n        universalTokenId\n        metadata {\n          title\n          proxyImageSmallUri\n          proxyImageMediumUri\n          createdBy\n        }  \n      }\n    }\n  }\n": types.GetCollectorsDocument,
    "\n  query GetCreators($targetAddress: String!) {\n    creators(targetAddress: $targetAddress) {\n      target {\n        userAddress\n        userAvatarUri\n        userName\n        userProfileName\n        isCollector\n        isCreator\n      }\n      source {\n        userAddress\n        userAvatarUri\n        userName\n        userProfileName\n        isCollector\n        isCreator\n      }  \n      nfts {\n        universalTokenId\n        metadata {\n          title\n          proxyImageSmallUri\n          proxyImageMediumUri\n          createdBy\n        }  \n      }\n    }\n  }\n": types.GetCreatorsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCollectors($targetAddress: String!) {\n    collectors(targetAddress: $targetAddress) {\n      target {\n        userAddress\n        userAvatarUri\n        userName\n        userProfileName\n        isCollector\n        isCreator\n      }\n      source {\n        userAddress\n        userAvatarUri\n        userName\n        userProfileName\n        isCollector\n        isCreator\n      }  \n      nfts {\n        universalTokenId\n        metadata {\n          title\n          proxyImageSmallUri\n          proxyImageMediumUri\n          createdBy\n        }  \n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCollectors($targetAddress: String!) {\n    collectors(targetAddress: $targetAddress) {\n      target {\n        userAddress\n        userAvatarUri\n        userName\n        userProfileName\n        isCollector\n        isCreator\n      }\n      source {\n        userAddress\n        userAvatarUri\n        userName\n        userProfileName\n        isCollector\n        isCreator\n      }  \n      nfts {\n        universalTokenId\n        metadata {\n          title\n          proxyImageSmallUri\n          proxyImageMediumUri\n          createdBy\n        }  \n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCreators($targetAddress: String!) {\n    creators(targetAddress: $targetAddress) {\n      target {\n        userAddress\n        userAvatarUri\n        userName\n        userProfileName\n        isCollector\n        isCreator\n      }\n      source {\n        userAddress\n        userAvatarUri\n        userName\n        userProfileName\n        isCollector\n        isCreator\n      }  \n      nfts {\n        universalTokenId\n        metadata {\n          title\n          proxyImageSmallUri\n          proxyImageMediumUri\n          createdBy\n        }  \n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCreators($targetAddress: String!) {\n    creators(targetAddress: $targetAddress) {\n      target {\n        userAddress\n        userAvatarUri\n        userName\n        userProfileName\n        isCollector\n        isCreator\n      }\n      source {\n        userAddress\n        userAvatarUri\n        userName\n        userProfileName\n        isCollector\n        isCreator\n      }  \n      nfts {\n        universalTokenId\n        metadata {\n          title\n          proxyImageSmallUri\n          proxyImageMediumUri\n          createdBy\n        }  \n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;