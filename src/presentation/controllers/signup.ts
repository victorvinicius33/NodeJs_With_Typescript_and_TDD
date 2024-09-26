import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle(httpsRequest: HttpRequest): HttpResponse {
    if (!httpsRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }

    if (!httpsRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }

    return {
      statusCode: 201,
      body: undefined,
    }
  }
}
