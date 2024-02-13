import gql from 'graphql-tag';

const creators = gql`
  type Query {
    creators(targetAddress: String!): [Relationship!]!
  }
`;

export default creators
