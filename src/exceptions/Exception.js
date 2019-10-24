import log from '../utils/logger'

export default class Exception {
  constructor (message, type, data) {
    if (this.constructor === Exception) {
      throw new TypeError('Can not construct abstract class.')
    }

    this.message = message
    this.type = type
    this.data = data || []

    log.error(type, message)
  }
}
