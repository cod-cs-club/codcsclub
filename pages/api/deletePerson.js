import db from '/functions/database'
import isAdmin from '/functions/isAdmin'

export default function handler(req, res) {
  if (!isAdmin(req)) return res.status(403).send({ error: 'No permission' })

  db.serialize(() => {
    db.run(`DELETE FROM People WHERE id = (?1)`, { 1: req.body.id })
    res.status(200).json({})
  })
}