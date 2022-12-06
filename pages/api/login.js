import cookie from 'cookie'

export default function handler(req, res) {
  const password = req.body.password ? req.body.password : ''
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('cs-password', password, {
        httpOnly: true,
        secure: process.env.HTTPS,
        maxAge: 7889238, // 3 months
        sameSite: 'strict',
        path: '/'
    })
  )
  if (password == process.env.ADMIN_PASSWORD) res.status(200).json({ success: true })
  else res.status(200).json({ success: false })
}