import { base } from './api.conf'

export default {
  login () {
    return Promise.resolve({ data: true })
  },
  password () {
    return base.post('auth/password')
  },
  register () {
    return base.post('auth/register')
  },
}
