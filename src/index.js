const { ApolloServer } = require('apollo-server-lambda')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const ProfileAPI = require('./datasource/profile.js')
const ProfilesAPI = require('./datasource/profiles.js')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    profileAPI: new ProfileAPI(),
    profilesAPI: new ProfilesAPI()
  })
})

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    methods: 'POST,OPTION',
    allowedHeaders: [
      'Content-Type',
      'Origin',
      'Accept'
    ]
  }
})
