import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProvidersService {
    async getProviders(query = '') {
        const res = await api.get('api/providers' + query)
        logger.log('getting providers', res.data)
        AppState.providers = res.data
    }
}
export const providersService = new ProvidersService()