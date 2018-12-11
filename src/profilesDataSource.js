const { RESTDataSource } = require('apollo-datasource-rest');

class ProfilesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://127.0.0.1:7000';

    // TODO move below, out of constructor
    this.profileReducer =   (profile) => {
        return {
          Name: profile.Name,
          rootStore: profile.root,
          did: profile.did,
          description: profile.description ,
          email: profile.email,
          location: profile.location,
          website: profile.website,
          github: profile.github,
          birthday: profile.birthday
        }
      }

      this.profilesReducer =   (profiles) => {
        return Object.keys(profiles).reduce((acc, key) => {
          // console.log(acc)
          // console.log(profiles[key])
          acc.push(this.profileReducer(Object.assign({rootStore: key}, profiles[key])))
          // acc.push(Object.assign({}, {[key]: this.profileReducer(profiles[key])}))
          return acc
        }, [])

        //
        // return Object.keys(profiles).reduce((acc, key) => {
        //   acc[key] = this.profileReducer(profiles[key])
        //   return acc
        // }, {})
        // return []
      }

    this.getProfilesByIds = async ({ profileIds }) => {
      // console.log(profileIds)
      const res = await this.get('profiles', {ids: profileIds});
      // console.log(res)
      console.log(this.profilesReducer(res))
      return this.profilesReducer(res);
    }
  }

}

module.exports = ProfilesAPI;
