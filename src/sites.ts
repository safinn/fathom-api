import { HTTPClient, CreateSiteParams, UpdateSiteParams } from './types'

export default class Sites {
  constructor(private _http: HTTPClient) {}

  public list(): any {
    return this._http.request('/sites', { method: 'GET' })
  }

  public get(siteID: string) {
    return this._http.request(`/sites/${siteID}`, { method: 'GET' })
  }

  public create(params: CreateSiteParams) {
    return this._http.request('/sites', {
      method: 'POST',
      body: JSON.stringify(params),
    })
  }

  public update(siteID: string, params?: UpdateSiteParams) {
    return this._http.request(`/sites/${siteID}`, {
      method: 'POST',
      body: JSON.stringify(params),
    })
  }

  public wipe(siteID: string) {
    return this._http.request(`/sites/${siteID}/data`, { method: 'DELETE' })
  }

  public delete(siteID: string) {
    return this._http.request(`/sites/${siteID}`, { method: 'DELETE' })
  }
}
