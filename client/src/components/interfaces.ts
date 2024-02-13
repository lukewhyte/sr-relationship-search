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

export interface Relationship {
  target: User
  source: User
  nfts: Nft[]
}
