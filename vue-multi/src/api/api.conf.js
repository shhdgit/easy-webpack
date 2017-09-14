import axios from 'axios'
import config from 'config'

const apiRoot = config.apiRoot
const base = axios.create({
  baseURL: apiRoot,
})

export {
  base,
}
