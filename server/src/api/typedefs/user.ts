import gql from 'graphql-tag';

const user = gql`
  type Query {
    user(targetAddress: String!): User
  }

  type User {
    userAddress: String!
    userAvatarUri: String!
    userName: String!
    userProfileName: String!
    isCreator: Boolean!
    isCollector: Boolean!
  }
`

export default user
