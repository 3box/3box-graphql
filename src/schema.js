const { gql } = require('apollo-server');

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





//
// type Launch {
//   id: ID!
//   site: String
//   mission: Mission
//   rocket: Rocket
//   isBooked: Boolean!
// }
//
// type Rocket {
//   id: ID!
//   name: String
//   type: String
// }
//
// type User {
//   id: ID!
//   email: String!
//   trips: [Launch]!
// }
//
// type Mission {
//   name: String
//   missionPatch(size: PatchSize): String
// }
//
// enum PatchSize {
//   SMALL
//   LARGE
// }
//
// type Mutation {
//   # if false, signup failed -- check errors
//   bookTrips(launchIds: [ID]!): TripUpdateResponse!
//
//   # if false, cancellation failed -- check errors
//   cancelTrip(launchId: ID!): TripUpdateResponse!
//
//   login(email: String): String # login token
// }
//
// type TripUpdateResponse {
//   success: Boolean!
//   message: String
//   launches: [Launch]
// }
