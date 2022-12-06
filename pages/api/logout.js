import cookie from 'cookie'

export default function handler(req, res) {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('cs-password', '', {
        httpOnly: true,
        secure: process.env.HTTPS,
        maxAge: new Date(0),
        sameSite: 'strict',
        path: '/'
    })
  )
  res.status(200).redirect('/login')
}