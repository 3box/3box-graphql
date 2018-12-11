const { ApolloServer } = require('apollo-server');
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

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
