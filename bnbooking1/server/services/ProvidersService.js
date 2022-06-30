import { dbContext } from "../db/DbContext"

class ProvidersService {

  async getAll(query = {}){
    const providers = await dbContext.Providers.find(query).populate('creator', 'name picture')
    return providers
  }

  async create(providerData){
    const provider = await dbContext.Providers.create(providerData)
    await provider.populate('creator', 'name picture')
    return provider
  }
}

export const providersService = new ProvidersService()