import { HTTPClient, AggregationParams } from './types'

export default class Sites {
  constructor(private _http: HTTPClient) {}

  public get(params: AggregationParams) {
    const { filters, ...queryStringParams } = params
    const aggregates = params.aggregates.join(',')
    const queryParams = {
      ...queryStringParams,
      aggregates,
    }
    const qs = new URLSearchParams(
      queryParams as Record<string, string>
    ).toString()

    let url = `/aggregations`
    if (qs) url += `?${qs}`
    return this._http.request(url, {
      method: 'GET',
      ...(filters && filters.length > 0 && { body: JSON.stringify(filters) }),
    })
  }
}
