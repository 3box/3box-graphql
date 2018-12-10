const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const ProfileAPI = require('./profileDataSource.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    profileAPI: new ProfileAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
