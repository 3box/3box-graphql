module.exports = {
  Query: {
    profile: (_, { id }, { dataSources }) =>
      dataSources.profileAPI.getProfileById({ profileId: id }),
    profiles: (_, { ids }, { dataSources }) =>
      dataSources.profilesAPI.getProfilesByIds({ profileIds: ids })
  }
}
