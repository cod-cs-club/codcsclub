import db from '/database'

export default function handler(req, res) {
  db.serialize(() => {
    db.run(`UPDATE People SET name = (?1), bio = (?2), image = (?3), role = (?4), socials = (?5) WHERE id = (?6)`, {
      1: req.body.info.name,
      2: req.body.info.bio,
      3: req.body.info.image,
      4: req.body.info.role,
      5: JSON.stringify(req.body.info.socials),
      6: req.body.info.id
    })
    res.status(200).json({})
  })
}

export const config = {
  api: { bodyParser: { sizeLimit: '40mb' }}
}