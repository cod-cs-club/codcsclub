import db from '/database'

export default function handler(req, res) {
  db.serialize(() => {
    console.log("db create!")
    db.run(`INSERT INTO People (name) VALUES (?1)`, { 1: req.body.name })
    db.get(`SELECT * FROM People ORDER BY id DESC LIMIT 1`, (err, row) => {
      res.status(200).json(row.id)
    })
  })
}