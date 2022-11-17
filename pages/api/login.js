import cookie from 'cookie'
import config from '/config.json'

export default function handler(req, res) {
  const password = req.body.password ? req.body.password : ''
  console.log(password)
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('password', password, {
        httpOnly: true,
        secure: config.https,
        maxAge: 7889238, // 3 months
        sameSite: 'strict',
        path: '/'
    })
  )
  if (password == config.adminPassword) res.status(200).json({ success: true })
  else res.status(200).json({ success: false })
}