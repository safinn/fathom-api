import {
  HTTPClient,
  ListEventsQueryString,
  CreateEventParams,
  UpdateEventParams,
} from './types'

export default class Sites {
  constructor(private _http: HTTPClient) {}

  public list(siteID: string, queryParams?: ListEventsQueryString) {
    const qs = new URLSearchParams(
      queryParams as Record<string, string>
    ).toString()

    let url = `/sites/${siteID}/events`
    if (qs) url += `?${qs}`
    return this._http.request(url, { method: 'GET' })
  }

  public get(siteID: string, eventID: string) {
    return this._http.request(`/sites/${siteID}/events/${eventID}`, {
      method: 'GET',
    })
  }

  public create(siteID: string, params: CreateEventParams) {
    return this._http.request(`/sites/${siteID}/events`, {
      method: 'POST',
      body: JSON.stringify(params),
    })
  }

  public update(siteID: string, eventID: string, params?: UpdateEventParams) {
    return this._http.request(`/sites/${siteID}/events/${eventID}`, {
      method: 'POST',
      body: JSON.stringify(params),
    })
  }

  public wipe(siteID: string, eventID: string) {
    return this._http.request(`/sites/${siteID}/events/${eventID}/data`, {
      method: 'DELETE',
    })
  }

  public delete(siteID: string, eventID: string) {
    return this._http.request(`/sites/${siteID}/events/${eventID}`, {
      method: 'DELETE',
    })
  }
}
