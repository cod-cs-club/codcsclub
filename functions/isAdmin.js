import cookie from 'cookie'

export default function isAdmin(req) {
  const password = cookie.parse(req.headers.cookie)['cs-password']
  return password == process.env.ADMIN_PASSWORD
}