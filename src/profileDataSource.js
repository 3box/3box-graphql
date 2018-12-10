const { RESTDataSource } = require('apollo-datasource-rest');

class ProfileAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://127.0.0.1:7000';

    // TODO move below, out of constructor
    this.profileReducer =   (profile) => {
        return {
          Name: profile.Name,
          did: profile.did,
          description: profile.description ,
          email: profile.email,
          location: profile.location,
          website: profile.website,
          github: profile.github,
          birthday: profile.birthday
        }
      }

    this.getProfileById = async ({ profileId }) => {
      const res = await this.get('profile/' +  encodeURIComponent(profileId));
      console.log(res)
      return this.profileReducer(res);
    }
  }

}

module.exports = ProfileAPI;
