import gql from 'graphql-tag';

const collectors = gql`
  type Query {
    collectors(targetAddress: String!): [Relationship!]!
  }
`;

export default collectors
