import db from '/database'

export default function handler(req, res) {
  console.log(req.body.info)
  // Filter out contributors with id of 0 (aka: No Person Selected).
  const contributors = req.body.info.contributors.filter(f => f.id != 0)
  db.serialize(() => {
    db.run(`UPDATE Projects SET name = (?1), description = (?2), image = (?3), visit = (?4), repository = (?5), tags = (?6), contributors = (?7) WHERE id = (?8)`, {
      1: req.body.info.name,
      2: req.body.info.description,
      3: req.body.info.image,
      4: req.body.info.visit,
      5: req.body.info.repository,
      6: JSON.stringify(req.body.info.tags),
      7: JSON.stringify(contributors),
      8: req.body.info.id
    })
    res.status(200).json({})
  })
}

export const config = {
  api: { bodyParser: { sizeLimit: '40mb' }}
}