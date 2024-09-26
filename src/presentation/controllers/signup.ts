import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle(httpsRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']

    for (const field of requiredFields) {
      if (!httpsRequest.body[field])
        return badRequest(new MissingParamError(field))
    }

    return {
      statusCode: 201,
      body: undefined,
    }
  }
}
