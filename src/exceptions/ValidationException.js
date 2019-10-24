import Exception from './Exception'

export default class ValidationException extends Exception {
  constructor (message, data) {
    super(message, 'ValidationException', data)
  }
}
