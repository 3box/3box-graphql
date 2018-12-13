const { ApolloServer } = require('apollo-server-lambda');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const ProfileAPI = require('./profileDataSource.js');
const ProfilesAPI = require('./profilesDataSource.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    profileAPI: new ProfileAPI(),
    profilesAPI: new ProfilesAPI()
  })
});

exports.graphqlHandler = server.createHandler();
