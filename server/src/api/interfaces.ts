export interface ProtocolUser {
  isCollector?: boolean
  isCreator?: boolean
  userAddress: string
  userAvatarUri?: string
  userName?: string
  userProfileName?: string
}

interface ProtocolMetadata {
  title?: string
  proxyImageSmallUri?: string
  proxyImageMediumUri?: string
  createdBy?: string
}

export interface ProtocolSalesByTarget {
  buyer: ProtocolUser
  nft: {
    universalTokenId: string
    metadata: ProtocolMetadata
    creator: ProtocolUser
  }
  seller: {
    userAddress: string
  }
}

export interface User {
  userAddress: string
  userAvatarUri: string
  userName: string
  userProfileName: string
  isCreator: boolean
  isCollector: boolean
}

export interface Nft {
  universalTokenId: string
  metadata: Metadata
}

export interface Metadata {
  title: string
  proxyImageSmallUri: string
  proxyImageMediumUri: string
  createdBy: string
}

export interface MappedRelationship {
  target: User
  source: User
  nfts: Map<string, Nft>
}

export interface Relationship {
  target: User
  source: User
  nfts: Nft[]
}
