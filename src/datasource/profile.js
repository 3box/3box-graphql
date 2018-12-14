const { RESTDataSource } = require('apollo-datasource-rest');

class ProfileAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://127.0.0.1:7000';
  }

  profileReducer(profile) {
      return profile
  }

  async getProfileById({ profileId }) {
    const res = await this.get('profile', {address: profileId});
    return this.profileReducer(Object.assign({address: profileId},res));
  }
}

module.exports = ProfileAPI;
