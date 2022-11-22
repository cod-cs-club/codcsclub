import db from '/functions/database'
import isAdmin from '/functions/isAdmin'

export default function handler(req, res) {
  if (!isAdmin(req)) return res.status(403).send({ error: 'No permission' })

  db.serialize(() => {
    db.run(`UPDATE People SET name = (?1), bio = (?2), image = (?3), role = (?4), onteam = (?5), socials = (?6) WHERE id = (?7)`, {
      1: req.body.info.name,
      2: req.body.info.bio,
      3: req.body.info.image,
      4: req.body.info.role,
      5: req.body.info.onteam,
      6: JSON.stringify(req.body.info.socials),
      7: req.body.info.id
    })
    res.status(200).json({})
  })
}

export const config = {
  api: { bodyParser: { sizeLimit: '40mb' }}
}