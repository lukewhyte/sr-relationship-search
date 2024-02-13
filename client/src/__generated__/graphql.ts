/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Metadata = {
  __typename?: 'Metadata';
  createdBy: Scalars['String']['output'];
  proxyImageMediumUri: Scalars['String']['output'];
  proxyImageSmallUri: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Nft = {
  __typename?: 'Nft';
  metadata: Metadata;
  universalTokenId: Scalars['String']['output'];
};

export type PaginationInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  order?: InputMaybe<SortOrder>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  collectors: Array<Relationship>;
  creators: Array<Relationship>;
  user?: Maybe<User>;
};


export type QueryCollectorsArgs = {
  targetAddress: Scalars['String']['input'];
};


export type QueryCreatorsArgs = {
  targetAddress: Scalars['String']['input'];
};


export type QueryUserArgs = {
  targetAddress: Scalars['String']['input'];
};

export type Relationship = {
  __typename?: 'Relationship';
  nfts: Array<Nft>;
  source: User;
  target: User;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type User = {
  __typename?: 'User';
  isCollector: Scalars['Boolean']['output'];
  isCreator: Scalars['Boolean']['output'];
  userAddress: Scalars['String']['output'];
  userAvatarUri: Scalars['String']['output'];
  userName: Scalars['String']['output'];
  userProfileName: Scalars['String']['output'];
};

export type GetCollectorsQueryVariables = Exact<{
  targetAddress: Scalars['String']['input'];
}>;


export type GetCollectorsQuery = { __typename?: 'Query', collectors: Array<{ __typename?: 'Relationship', target: { __typename?: 'User', userAddress: string, userAvatarUri: string, userName: string, userProfileName: string, isCollector: boolean, isCreator: boolean }, source: { __typename?: 'User', userAddress: string, userAvatarUri: string, userName: string, userProfileName: string, isCollector: boolean, isCreator: boolean }, nfts: Array<{ __typename?: 'Nft', universalTokenId: string, metadata: { __typename?: 'Metadata', title: string, proxyImageSmallUri: string, proxyImageMediumUri: string, createdBy: string } }> }> };

export type GetCreatorsQueryVariables = Exact<{
  targetAddress: Scalars['String']['input'];
}>;


export type GetCreatorsQuery = { __typename?: 'Query', creators: Array<{ __typename?: 'Relationship', target: { __typename?: 'User', userAddress: string, userAvatarUri: string, userName: string, userProfileName: string, isCollector: boolean, isCreator: boolean }, source: { __typename?: 'User', userAddress: string, userAvatarUri: string, userName: string, userProfileName: string, isCollector: boolean, isCreator: boolean }, nfts: Array<{ __typename?: 'Nft', universalTokenId: string, metadata: { __typename?: 'Metadata', title: string, proxyImageSmallUri: string, proxyImageMediumUri: string, createdBy: string } }> }> };


export const GetCollectorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"targetAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"target"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAddress"}},{"kind":"Field","name":{"kind":"Name","value":"userAvatarUri"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"userProfileName"}},{"kind":"Field","name":{"kind":"Name","value":"isCollector"}},{"kind":"Field","name":{"kind":"Name","value":"isCreator"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAddress"}},{"kind":"Field","name":{"kind":"Name","value":"userAvatarUri"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"userProfileName"}},{"kind":"Field","name":{"kind":"Name","value":"isCollector"}},{"kind":"Field","name":{"kind":"Name","value":"isCreator"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nfts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"universalTokenId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"proxyImageSmallUri"}},{"kind":"Field","name":{"kind":"Name","value":"proxyImageMediumUri"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectorsQuery, GetCollectorsQueryVariables>;
export const GetCreatorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCreators"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"targetAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"target"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAddress"}},{"kind":"Field","name":{"kind":"Name","value":"userAvatarUri"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"userProfileName"}},{"kind":"Field","name":{"kind":"Name","value":"isCollector"}},{"kind":"Field","name":{"kind":"Name","value":"isCreator"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAddress"}},{"kind":"Field","name":{"kind":"Name","value":"userAvatarUri"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"userProfileName"}},{"kind":"Field","name":{"kind":"Name","value":"isCollector"}},{"kind":"Field","name":{"kind":"Name","value":"isCreator"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nfts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"universalTokenId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"proxyImageSmallUri"}},{"kind":"Field","name":{"kind":"Name","value":"proxyImageMediumUri"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCreatorsQuery, GetCreatorsQueryVariables>;