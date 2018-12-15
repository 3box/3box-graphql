const { RESTDataSource } = require('apollo-datasource-rest');

class ProfilesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://127.0.0.1:8080';
  }

  profileReducer(profile) {
    return profile
  }

  profilesReducer(profiles) {
    return Object.keys(profiles).reduce((acc, key) => {
      acc.push(this.profileReducer(Object.assign({address: key}, profiles[key])))
      return acc
    }, [])
  }

  async getProfilesByIds({ profileIds }) {
    const res = await this.post('profileList', {addressList: profileIds});
    return this.profilesReducer(res);
  }
}

module.exports = ProfilesAPI;
