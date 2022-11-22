import cookie from 'cookie'
import config from '/config.json'

export default function isAdmin(req) {
  const password = cookie.parse(req.headers.cookie)['cs-password']
  return password == config.adminPassword
}