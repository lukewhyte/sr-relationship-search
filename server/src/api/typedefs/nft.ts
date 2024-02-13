import gql from 'graphql-tag';

const nft = gql`
  type Nft {
    universalTokenId: String!
    metadata: Metadata!
  }

  type Metadata {
    title: String!
    proxyImageSmallUri: String!
    proxyImageMediumUri: String!
    createdBy: String!
  }
`

export default nft
