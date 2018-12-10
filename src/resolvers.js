module.exports = {
  Query: {
    profile: (_, { id }, { dataSources }) =>
      dataSources.profileAPI.getProfileById({ profileId: id }),
  },
};
