const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
type Query {
  profiles(ids: [String]!): [Profile]
  profile(id: String!): Profile
}

type Profile {
  name: String
  did: String
  description: String
  emoji: String
  location: String
  website: String
  github_proof: String
  employer: String
  job: String
  school: String
  degree: String
  major: String
}
`

module.exports = typeDefs;
