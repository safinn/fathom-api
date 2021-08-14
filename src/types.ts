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
