const { RESTDataSource } = require('apollo-datasource-rest')

class ProfileAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://ipfs.3box.io'
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

  async getProfileById ({ profileId }) {
    const res = await this.get('profile', { address: profileId })
    return this.profileReducer(Object.assign({ eth_address: profileId }, res))
  }
}

module.exports = ProfileAPI
