const { gql } = require('apollo-server-lambda')

const typeDefs = gql`
type Query {
  profiles(ids: [String]!): [Profile]
  profile(id: String!): Profile
}

type Profile {
  name: String
  image: String
  emoji: String
  description: String
  eth_address: String
  did: String
  location: String
  website: String
  proof_github: String
  proof_twitter: String
  proof_did: String
  proof_eth_address: String
}
`

module.exports = typeDefs
