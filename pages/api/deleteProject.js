import db from '/database'

export default function handler(req, res) {
  db.serialize(() => {
    db.run(`DELETE FROM Projects WHERE id = (?1)`, { 1: req.body.id })
    res.status(200).json({})
  })
}