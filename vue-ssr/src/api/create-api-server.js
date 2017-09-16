import axios from 'axios'

export function createAPI(config) {
  let api
  // this piece of code may run multiple times in development mode,
  // so we attach the instantiated API to `process` to avoid duplications
  if (process.__API__) {
    api = process.__API__
  } else {
    api = process.__API__ = axios.create(config)
  }

  return api
}
