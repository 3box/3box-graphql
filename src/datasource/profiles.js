const { RESTDataSource } = require('apollo-datasource-rest')

class ProfilesAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = process.env.PROFILE_SERVER_URL || 'https://ipfs.3box.io'
  }

  profileReducer (profile) {
    try {
      profile.image = profile.image[0].contentUrl['/']
    } catch (err) {}
    if (!profile.proof_eth_address) {
      profile.proof_eth_address = JSON.stringify(profile.ethereum_proof)
    }
    return profile
  }

  profilesReducer (profiles) {
    return Object.keys(profiles).reduce((acc, key) => {
      acc.push(this.profileReducer(Object.assign({ eth_address: key }, profiles[key])))
      return acc
    }, [])
  }

  async getProfilesByIds ({ profileIds }) {
    const res = await this.post('profileList', { addressList: profileIds })
    return this.profilesReducer(res)
  }
}

module.exports = ProfilesAPI
