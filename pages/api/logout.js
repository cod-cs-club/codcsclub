import cookie from 'cookie'
import config from '/config.json'

export default function handler(req, res) {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('password', '', {
        httpOnly: true,
        secure: config.https,
        maxAge: new Date(0),
        sameSite: 'strict',
        path: '/'
    })
  )
  res.status(200).redirect('/login')
}