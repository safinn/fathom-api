import 'isomorphic-unfetch'
import { ClientConfig, HTTPClient } from './types'

export default function (config: ClientConfig): HTTPClient {
  const version = config.version || 1
  const basePath = `https://api.usefathom.com/v${version}`

  return {
    async request(endpoint: string, options = {}) {
      const url = basePath + endpoint

      const headers = {
        Authorization: `Bearer ${config.apiKey}`,
        'Content-type': 'application/json',
        Accept: 'application/json',
      }

      const reqConfig = {
        ...options,
        headers: {
          ...options.headers,
          ...headers,
        },
      }

      const res = await fetch(url, reqConfig)
      return res.json()
    },
  }
}
