import db from '/functions/database'
import isAdmin from '/functions/isAdmin'

export default function handler(req, res) {
  if (!isAdmin(req)) return res.status(403).send({ error: 'No permission' })

  db.serialize(() => {
    console.log("db create!")
    db.run(`INSERT INTO People (name) VALUES (?1)`, { 1: req.body.name })
    db.get(`SELECT * FROM People ORDER BY id DESC LIMIT 1`, (err, row) => {
      res.status(200).json(row.id)
    })
  })
}