import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'

export class SignUpController {
  handle(httpsRequest: HttpRequest): HttpResponse {
    if (!httpsRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name'),
      }
    }

    if (!httpsRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email'),
      }
    }

    return {
      statusCode: 201,
      body: undefined,
    }
  }
}
