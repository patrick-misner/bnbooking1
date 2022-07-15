import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProvidersService {
    async getProviders(query = '') {
        const res = await api.get('api/providers' + query)
        logger.log('getting providers', res.data)
        AppState.providers = res.data
    }
    async getProvider(providerId) {
        const res = await api.get('api/providers/' + providerId)
        AppState.activeProvider = res.data
    }


    async createProvider(body) {
        logger.log('new provider', body)
        const res = await api.post('api/providers', body)
        logger.log('created provider', res.data)
        // AppState.accountProvider.push(res.data)
        AppState.providers.push(res.data)
        AppState.myProviders.push(res.data)
        return res.data
    }

    async searchProviders(query = '') {
        AppState.query = query
        logger.log('searching', query)
        const res = await api.get(`api/providers?${query}`)
        logger.log('searching Providers', res.data)
        AppState.providers = res.data
    }

    async getMyProviders() {
        const res = await api.get('account/providers')
        AppState.myProviders = res.data
        logger.log('myproviders', res.data)
    }

    async deleteProvider(providerId) {
        const res = await api.delete('api/providers/' + providerId)
        AppState.providers = AppState.providers.filter(p => p.id != providerId)
        AppState.myProviders = AppState.myProviders.filter(m => m.id != providerId)
    }

    // async getAccountProvider(accountId){
    //     const provider = await api.get('api/providers')
    //     AppState.providers = AppState.providers.find(p => p.creatorId == accountId)
    //     logger.log()
    // }
}
export const providersService = new ProvidersService()