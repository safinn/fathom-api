import { HTTPClient, CurrentVisitors } from './types'

export default class Sites {
  constructor(private _http: HTTPClient) {}

  public current(params: CurrentVisitors) {
    return this._http.request(`/current_visitors`, {
      method: 'GET',
      body: JSON.stringify(params),
    })
  }
}
