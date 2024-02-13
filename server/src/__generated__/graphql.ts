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

export type Activity = {
  __typename?: 'Activity';
  agent: User;
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['String']['output'];
  eventType: Scalars['String']['output'];
  other?: Maybe<Scalars['String']['output']>;
  patient: User;
  pool: Pool;
};

export type ArtEventFeed = {
  __typename?: 'ArtEventFeed';
  nft: Nft;
  sumPoints: Scalars['Float']['output'];
  sumPointsAdjusted: Scalars['Float']['output'];
};

export type ArtFeedList = {
  __typename?: 'ArtFeedList';
  art: Array<Maybe<ArtEventFeed>>;
  staker: User;
  stats: StakerStats;
};

export type CollectionBreakdown = {
  __typename?: 'CollectionBreakdown';
  acquisitionTotal: Scalars['Int']['output'];
  collectedCount: Scalars['Int']['output'];
  creator: User;
  valuationTotal: Scalars['Int']['output'];
};

export type CollectionStats = {
  __typename?: 'CollectionStats';
  collectionValue: Scalars['Int']['output'];
  collector: User;
  totalTokens: Scalars['Int']['output'];
};

export enum CurrencyType {
  Eth = 'ETH',
  Rare = 'RARE',
  Usd = 'USD'
}

export type DailyProtocolStats = {
  __typename?: 'DailyProtocolStats';
  cumulativeCreatorParticipation: Scalars['Int']['output'];
  cumulativeFirstTimeStakers: Scalars['Int']['output'];
  cumulativePoolCount: Scalars['Int']['output'];
  cumulativeReward: Scalars['Int']['output'];
  cumulativeStake: Scalars['Int']['output'];
  date: Scalars['String']['output'];
  usdRare: Scalars['Float']['output'];
};

export type HomepageTableRow = {
  __typename?: 'HomepageTableRow';
  blockTimestamp?: Maybe<Scalars['String']['output']>;
  periodLength?: Maybe<Scalars['Float']['output']>;
  rewardSwap?: Maybe<Scalars['Float']['output']>;
  roundRewards?: Maybe<Scalars['Float']['output']>;
  stakerPools?: Maybe<Array<Maybe<StakerPool>>>;
  stakingAddress?: Maybe<Scalars['String']['output']>;
  totalRareLocked?: Maybe<Scalars['Float']['output']>;
  totalRewards?: Maybe<Scalars['Float']['output']>;
  totalSupply?: Maybe<Scalars['Float']['output']>;
  userStakedOn?: Maybe<Scalars['String']['output']>;
};

export type Link = {
  __typename?: 'Link';
  source: Scalars['Int']['output'];
  target: Scalars['Int']['output'];
};

export type Nft = {
  __typename?: 'Nft';
  createdAt: Scalars['String']['output'];
  creator: User;
  metadata: NftMetadata;
  owner: User;
  tokenContractAddress: Scalars['String']['output'];
  tokenId: Scalars['String']['output'];
  universalSeriesId: Scalars['String']['output'];
  universalTokenId: Scalars['String']['output'];
};

export type NftMetadata = {
  __typename?: 'NftMetadata';
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  metadataUri?: Maybe<Scalars['String']['output']>;
  originalMediaUri?: Maybe<Scalars['String']['output']>;
  originalMimeType?: Maybe<Scalars['String']['output']>;
  originalThumbnailUri?: Maybe<Scalars['String']['output']>;
  proxyImageMediumUri?: Maybe<Scalars['String']['output']>;
  proxyImageSmallUri?: Maybe<Scalars['String']['output']>;
  proxyVideoMediumUri?: Maybe<Scalars['String']['output']>;
  proxyVideoSmallUri?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Node = {
  __typename?: 'Node';
  id: Scalars['Int']['output'];
  staker: User;
  stakerRank?: Maybe<Scalars['Float']['output']>;
};

export type PaginationInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  order?: InputMaybe<SortOrder>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type Pool = {
  __typename?: 'Pool';
  createdAt: Scalars['String']['output'];
  creator: User;
  poolAddress: Scalars['String']['output'];
  stakes: Array<Maybe<Stake>>;
  target: User;
};

export type PoolSale = {
  __typename?: 'PoolSale';
  blockTimestamp: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  nft: Nft;
  pool: Pool;
  saleAmount: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  activity: Array<Maybe<Activity>>;
  allArtists: Array<Maybe<User>>;
  collectionBreakdown: Array<CollectionBreakdown>;
  collectionStats: Array<CollectionStats>;
  curatedList: Array<Maybe<Stake>>;
  dailyProtocolStats: Array<DailyProtocolStats>;
  feed: Array<Maybe<ArtEventFeed>>;
  feedList: Array<Maybe<ArtFeedList>>;
  homepageTable: Array<HomepageTableRow>;
  latestRound: Array<Maybe<Round>>;
  nft: Array<Maybe<Nft>>;
  pool: Array<Maybe<Pool>>;
  poolSales: Array<Maybe<PoolSale>>;
  salesByTarget: Array<Maybe<Sale>>;
  socialGraph: SocialGraph;
  stakerFeed: Array<Maybe<ArtEventFeed>>;
  stakerStats: Array<Maybe<StakerStats>>;
  targetRanking: TargetRanking;
  trendingPools: Array<TrendingPool>;
  user: Array<Maybe<User>>;
};


export type QueryActivityArgs = {
  pagination: PaginationInput;
  userAddresses: Array<InputMaybe<Scalars['String']['input']>>;
};


export type QueryAllArtistsArgs = {
  pagination: PaginationInput;
};


export type QueryCollectionBreakdownArgs = {
  pagination: PaginationInput;
  targetAddress: Scalars['String']['input'];
};


export type QueryCuratedListArgs = {
  stakerAddress: Scalars['String']['input'];
};


export type QueryDailyProtocolStatsArgs = {
  pagination: PaginationInput;
};


export type QueryFeedArgs = {
  pagination: PaginationInput;
};


export type QueryFeedListArgs = {
  artCount?: InputMaybe<Scalars['Int']['input']>;
  pagination: PaginationInput;
  stakerAddress: Array<InputMaybe<Scalars['String']['input']>>;
};


export type QueryLatestRoundArgs = {
  poolAddresses: Array<Scalars['String']['input']>;
};


export type QueryNftArgs = {
  universalTokenIds: Array<Scalars['String']['input']>;
};


export type QueryPoolArgs = {
  poolAddresses: Array<Scalars['String']['input']>;
};


export type QueryPoolSalesArgs = {
  pagination: PaginationInput;
  poolAddress?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySalesByTargetArgs = {
  targetAddresses: Array<Scalars['String']['input']>;
};


export type QuerySocialGraphArgs = {
  targetAddress: Scalars['String']['input'];
};


export type QueryStakerFeedArgs = {
  pagination: PaginationInput;
  stakerAddress: Scalars['String']['input'];
};


export type QueryStakerStatsArgs = {
  pagination: PaginationInput;
  stakerAddresses: Array<InputMaybe<Scalars['String']['input']>>;
};


export type QueryTargetRankingArgs = {
  targetAddress: Scalars['String']['input'];
};


export type QueryTrendingPoolsArgs = {
  pagination: PaginationInput;
};


export type QueryUserArgs = {
  userAddresses: Array<Scalars['String']['input']>;
};

export type Round = {
  __typename?: 'Round';
  createdAt: Scalars['String']['output'];
  pool: Pool;
  round: Scalars['Int']['output'];
  roundEndsAt: Scalars['Int']['output'];
  roundStartsAt: Scalars['Int']['output'];
};

export type Sale = {
  __typename?: 'Sale';
  amount: Scalars['Float']['output'];
  buyer: User;
  creator: User;
  currency: Scalars['String']['output'];
  nft: Nft;
  saleCompletedAt: Scalars['String']['output'];
  saleType: Scalars['String']['output'];
  seller: User;
};

export type SocialGraph = {
  __typename?: 'SocialGraph';
  links?: Maybe<Array<Maybe<Link>>>;
  nodes: Array<Node>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Stake = {
  __typename?: 'Stake';
  amountStaked: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  pool: Pool;
  staker: User;
  totalStaked: Scalars['Float']['output'];
};

export type Staker = {
  __typename?: 'Staker';
  id?: Maybe<Scalars['String']['output']>;
};

export type StakerPool = {
  __typename?: 'StakerPool';
  hasClaim?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  rareAmount?: Maybe<Scalars['Float']['output']>;
  rewardSwap?: Maybe<Scalars['Float']['output']>;
  sRareAmount?: Maybe<Scalars['Float']['output']>;
  staker?: Maybe<Staker>;
};

export type StakerStats = {
  __typename?: 'StakerStats';
  staker: User;
  totalClaimed: Scalars['Float']['output'];
  totalPoolsCreated: Scalars['Int']['output'];
  totalPoolsStaked: Scalars['Int']['output'];
  totalStaked: Scalars['Float']['output'];
};

export type TargetRanking = {
  __typename?: 'TargetRanking';
  purchaseCountRank: Scalars['Float']['output'];
  purchaseVolumeRank: Scalars['Float']['output'];
  saleCountRank: Scalars['Float']['output'];
  saleVolumeRank: Scalars['Float']['output'];
  totalLockedInPoolRank: Scalars['Float']['output'];
  totalStakersInPoolRank: Scalars['Float']['output'];
  weeksActiveRank: Scalars['Float']['output'];
};

export type TrendingPool = {
  __typename?: 'TrendingPool';
  pool: Pool;
  rankChange: Scalars['Int']['output'];
  totalStakers: Scalars['Int']['output'];
  trendingRank: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  ensName?: Maybe<Scalars['String']['output']>;
  isCollector?: Maybe<Scalars['Boolean']['output']>;
  isCreator?: Maybe<Scalars['Boolean']['output']>;
  pool?: Maybe<Pool>;
  stakes: Array<Maybe<Stake>>;
  userAddress: Scalars['String']['output'];
  userAvatarUri?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
  userProfileName?: Maybe<Scalars['String']['output']>;
};

export type UserQueryVariables = Exact<{
  userAddresses: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user: Array<{ __typename?: 'User', isCollector?: boolean | null, isCreator?: boolean | null, userAddress: string, userAvatarUri?: string | null, userName?: string | null, userProfileName?: string | null } | null> };

export type SalesByTargetQueryVariables = Exact<{
  targetAddresses: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type SalesByTargetQuery = { __typename?: 'Query', salesByTarget: Array<{ __typename?: 'Sale', buyer: { __typename?: 'User', isCollector?: boolean | null, isCreator?: boolean | null, userAddress: string, userAvatarUri?: string | null, userName?: string | null, userProfileName?: string | null }, nft: { __typename?: 'Nft', universalTokenId: string, metadata: { __typename?: 'NftMetadata', title?: string | null, proxyImageSmallUri?: string | null, proxyImageMediumUri?: string | null, createdBy?: string | null }, creator: { __typename?: 'User', isCollector?: boolean | null, isCreator?: boolean | null, userAddress: string, userAvatarUri?: string | null, userName?: string | null, userProfileName?: string | null } }, seller: { __typename?: 'User', userAddress: string } } | null> };

export type CollectorsArtistsQueryVariables = Exact<{
  targetAddress: Scalars['String']['input'];
  pagination: PaginationInput;
}>;


export type CollectorsArtistsQuery = { __typename?: 'Query', collectionBreakdown: Array<{ __typename?: 'CollectionBreakdown', creator: { __typename?: 'User', userName?: string | null, userProfileName?: string | null, userAvatarUri?: string | null, userAddress: string, isCreator?: boolean | null, isCollector?: boolean | null } }> };


export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAddresses"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userAddresses"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAddresses"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCollector"}},{"kind":"Field","name":{"kind":"Name","value":"isCreator"}},{"kind":"Field","name":{"kind":"Name","value":"userAddress"}},{"kind":"Field","name":{"kind":"Name","value":"userAvatarUri"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"userProfileName"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const SalesByTargetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SalesByTarget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetAddresses"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"salesByTarget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"targetAddresses"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetAddresses"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buyer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCollector"}},{"kind":"Field","name":{"kind":"Name","value":"isCreator"}},{"kind":"Field","name":{"kind":"Name","value":"userAddress"}},{"kind":"Field","name":{"kind":"Name","value":"userAvatarUri"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"userProfileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"universalTokenId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"proxyImageSmallUri"}},{"kind":"Field","name":{"kind":"Name","value":"proxyImageMediumUri"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCollector"}},{"kind":"Field","name":{"kind":"Name","value":"isCreator"}},{"kind":"Field","name":{"kind":"Name","value":"userAddress"}},{"kind":"Field","name":{"kind":"Name","value":"userAvatarUri"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"userProfileName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seller"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAddress"}}]}}]}}]}}]} as unknown as DocumentNode<SalesByTargetQuery, SalesByTargetQueryVariables>;
export const CollectorsArtistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollectorsArtists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionBreakdown"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"targetAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"userProfileName"}},{"kind":"Field","name":{"kind":"Name","value":"userAvatarUri"}},{"kind":"Field","name":{"kind":"Name","value":"userAddress"}},{"kind":"Field","name":{"kind":"Name","value":"isCreator"}},{"kind":"Field","name":{"kind":"Name","value":"isCollector"}}]}}]}}]}}]} as unknown as DocumentNode<CollectorsArtistsQuery, CollectorsArtistsQueryVariables>;