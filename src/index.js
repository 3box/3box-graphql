const { ApolloServer } = require('apollo-server-lambda')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const ProfileAPI = require('./datasource/profile.js')
const ProfilesAPI = require('./datasource/profiles.js')

const PROFILE_SERVER_URL = process.env.PROFILE_SERVER_URL

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    profileAPI: new ProfileAPI(PROFILE_SERVER_URL),
    profilesAPI: new ProfilesAPI(PROFILE_SERVER_URL)
  })
})

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
    methods: 'POST, OPTIONS'
  }
})
