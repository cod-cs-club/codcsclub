import db from '/database'

export default function handler(req, res) {
  db.serialize(() => {
    db.run(`INSERT INTO Projects (name) VALUES (?1)`, { 1: req.body.name })
    db.get(`SELECT * FROM Projects ORDER BY id DESC LIMIT 1`, (err, row) => {
      res.status(200).json(row.id)
    })
  })
}