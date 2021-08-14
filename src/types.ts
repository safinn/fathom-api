export interface ClientConfig {
  apiKey?: string
  version?: number
}

export interface HTTPClient {
  request: (endpoint: string, options: RequestInit) => Promise<any>
}

enum Sharing {
  None = 'none',
  Private = 'private',
  Public = 'public',
}

export interface CreateSiteParams {
  name: string
  sharing?: Sharing
  share_password?: string
}

export interface UpdateSiteParams {
  name?: string
  sharing?: Sharing
  share_password?: string
}

export interface ListEventsQueryString {
  limit?: string
  starting_after?: string
  ending_before?: string
}

export interface CreateEventParams {
  name: string
}

export interface UpdateEventParams {
  name?: string
}

enum Entity {
  Pageview = 'pageview',
  Event = 'event',
}

enum Aggregates {
  Visits = 'visits',
  Uniques = 'uniques',
  Pageviews = 'pageviews',
  AvgDuration = 'avg_duration',
  BounceRate = 'bounce_rate',
}

enum DataGrouping {
  Hour = 'hour',
  Day = 'day',
  Month = 'month',
  Year = 'year',
}

enum FieldGrouping {
  Hostname = 'hostname',
  Pathname = 'pathname',
  ReferrerHostname = 'referrer_hostname',
  ReferrerPathname = 'referrer_pathname',
  Browser = 'browser',
  Country = 'country',
  DeviceType = 'device_type',
  UtmCapaign = 'utm_campaign',
  UtmContent = 'utm_content',
  UtmMedium = 'utm_medium',
  UtmSource = 'utm_source',
  UtmTerm = 'utm_term',
  Keyword = 'keyword',
  Q = 'q',
  Ref = 'ref',
  S = 's',
}

export interface Filter {
  property: string
  operator: string
  value: string
}

export interface AggregationParams {
  entity: Entity
  entity_id: string
  aggregates: Aggregates[]
  date_grouping?: DataGrouping
  field_grouping?: FieldGrouping
  sort_by?: string
  timezone?: string
  date_from?: string
  date_to?: string
  filters?: Filter[]
}
