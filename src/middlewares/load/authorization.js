import jwt from 'jsonwebtoken'
import utils from '../../utils/utils'
import Context from '../../utils/context'
import Messages from '../../utils/Messages'

export default (request, response, next) => {
  const context = new Context(response, request)
  const ignoreRoute = new Set(['login', 'docs'])
  const specificRoute = utils.specificRoute(request.path)

  if (!ignoreRoute.has(specificRoute)) {
    const authHeader = request.headers.authorization
    let token = request.query.token

    if (!authHeader && !token) {
      return context.unauthorized(Messages.auth.token.noProvided)
    }

    if (authHeader) {
      const parts = authHeader.split(' ')

      if (parts.length !== 2) {
        return context.unauthorized(Messages.auth.token.tokenError)
      }

      const [scheme, tokenParts] = parts // eslint-disable-line
      token = tokenParts

      if (!/^Bearer$/i.test(scheme)) {
        return context.unauthorized(Messages.auth.token.malformatted)
      }
    }

    const secretKey = process.env.SECRET_KEY_TOKEN

    try {
      request.user = jwt.verify(token, secretKey).user
    } catch (error) {
      return context.unauthorized(Messages.auth.token.invalid)
    }
  }

  next()
}
