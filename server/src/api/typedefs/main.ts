import gql from 'graphql-tag';
import collectors from "./collectors"
import nft from './nft';
import user from './user';
import creators from './creators';

const typeDefs = gql`
  input PaginationInput {
    offset: Int!
    limit: Int!
    sortBy: String
    order: SortOrder
  }

  enum SortOrder {
    ASC
    DESC
  }

  type Relationship {
    target: User!
    source: User!
    nfts: [Nft!]!
  }

  ${user}
  ${nft}
  ${collectors}
  ${creators}
`

export default typeDefs