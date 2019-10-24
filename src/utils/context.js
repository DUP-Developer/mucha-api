import logger from './logger'
import _ from 'lodash'
import path from 'path'
/**
 *
 * the script is used in conversation into back-end and front-end
 * it's one pattern of the conversation of the aplications.
 *
 *
 */

export default class Context {
  constructor (response, request = null) {
    this.ctx = {
      data: [],
      status: {
        success: false
      }
    }
    this.response = response
    this.request = request
  }

  // caso seja informações de sucessso
  success (data, message) {
    this.ctx.status.success = true
    this.ctx.status.message = message
    this.ctx = { ...this.ctx, ...data }

    return this.response.status(200).send(this.ctx)
  }

  // caso seja informações de sucessso
  error (except) {
    const data = _.isString(except) ? { message: except } : { ...except }

    this.ctx.status.success = false
    this.ctx.status = {
      ...this.ctx.status,
      ...data
    }
    logger.error(except.message || except)

    return this.response.status(200).send(this.ctx)
  }

  // no token
  unauthorized (except) {
    const data = _.isString(except) ? { message: except } : { ...except }

    this.ctx.status.success = false
    this.ctx.status = {
      ...this.ctx.status,
      ...data
    }
    logger.error(except.message || except)

    if (
      this.request.method === 'GET' &&
      this.request.url.includes('api/v1/user/create-password')
    ) {
      return this.response.sendFile(
        path.join(`${__dirname}/../views/invalid-token.html`)
      )
    }

    return this.response.status(401).send(this.ctx)
  }
}
