import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async saveAccount(accountData){
    const res = await api.put('/account', accountData)
    logger.log('saving account page', res.data)
   
  }
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

}

export const accountService = new AccountService()
