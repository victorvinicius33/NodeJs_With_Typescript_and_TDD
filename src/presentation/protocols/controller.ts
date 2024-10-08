import { HttpRequest, HttpResponse } from './http'

export interface Controller {
  handle(httpsRequest: HttpRequest): Promise<HttpResponse>
}
