import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('appointment:created', this.messageUser)
  }

  messageUser(payload){
    logger.log('socket received', payload)
    Pop.toast(`${payload.account.name} just booked an appointment with you HOMIE`)
  }

  onError(e) {
    Pop.toast(e.message, 'error')
  }
}

export const socketService = new SocketService()
