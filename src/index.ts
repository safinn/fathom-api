import { ClientConfig } from './types'
import clientConstructor from './client'
import Account from './account'
import Sites from './sites'
import Events from './events'
import Aggregation from './aggregation'

function createClient(config: ClientConfig) {
  const http = clientConstructor(config)

  return {
    account: new Account(http),
    sites: new Sites(http),
    events: new Events(http),
    aggregation: new Aggregation(http),
  }
}

createClient.default = createClient
export = createClient
