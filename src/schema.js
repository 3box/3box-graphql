const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
type Query {
  profiles(ids: [String]!): [Profile]
  profile(id: String!): Profile
}

type Profile {
  Name: String
  rootStore: String
  did: String
  description: String
  spiritEmoji: Emoji
  email: String
  location: String
  website: String
  github: String
  birthday: String
  work: Work
  education: Education
}

type Emoji {
  no: ID!
  code: String!
  char: String!
  name: String!
  date: String!
  keywords: [String!]!
}

type Work {
  employer: String
  jobTitle: String
}

type Education {
  school: String
  degree: String
  major: String
  year: String
}
`

module.exports = typeDefs;
