import { HTTPClient } from './types'

export default class Account {
  constructor(private _http: HTTPClient) {}

  public get() {
    return this._http.request("/account", { method: 'GET' })
  }

}
