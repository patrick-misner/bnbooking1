import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class ProvidersService {

  /**
   * 
   * @param {String} searchTerm this term will be used to find all providers with this as their name or one of the tags 
   * @returns providers array 
   */
  async find(searchTerm = '') {
    // if(!query.body && searchTerm){
    //   query.body = searchTerm
    // }

    const terms = [{ name: { $regex: new RegExp(searchTerm, 'ig') } }, { tags: { $regex: new RegExp(searchTerm, 'ig') } }]

    const providers = await dbContext.Providers.find({ $or: terms }).populate('creator', 'name picture')
    return providers
  }
  async getById(providerId) {

    const provider = await dbContext.Providers.findById(providerId)
      .populate('creator', 'name picture')
    if (!provider) {
      throw new BadRequest('Invalid')
    }
    return provider
  }

  async create(providerData) {
    for (let i = 0; i < providerData.availability.length; i++) {
      if (parseInt(providerData.availability[i].close) < parseInt(providerData.availability[i].open)) {
        throw new BadRequest('Invalid availability')
      }
    }
    const provider = await dbContext.Providers.create(providerData)
    await provider.populate('creator', 'name picture')
    return provider
  }
  async edit(providerId, update) {
    const original = await this.getById(providerId)
    if (original.creatorId.toString() != update.creatorId) {
      throw new BadRequest('you cant edit this buddy')
    }
    original.coverImg = update.coverImg || original.coverImg
    original.bio = update.bio || original.bio
    original.description = update.description || original.description
    original.location = update.location || original.location
    original.photos = update.photos || original.photos
    original.name = update.name || original.name
    original.tags = update.tags || original.tags
    original.availability = update.availability || original.availability
    original.rating = update.rating || original.rating
    original.save()
    return update
  }

  async getAccountProviders(accountId) {
    const providers = await dbContext.Providers.find({ creatorId: accountId })
    return providers
  }
  async delete(providerId, userId) {
    const provider = await this.getById(providerId)
    if (provider.creatorId.toString() != userId) {
      throw new BadRequest("You don't have permissions to delete this Provider")
    }
    await provider.remove()
    return "Provider Deleted"
  }

}

export const providersService = new ProvidersService()