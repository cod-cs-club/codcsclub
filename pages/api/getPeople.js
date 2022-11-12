import db from '/database'

export default function handler(req, res) {
  const people = []
  db.all(`SELECT * FROM People`, (err, rows) => {
    rows.forEach(row => {
      people.push({
        id: row.id,
        name: row.name,
        image: row.image,
        bio: row.bio,
        role: row.role,
        onteam: row.onteam,
        socials: JSON.parse(row.socials),
        date: row.date
      })
    })
    res.status(200).json(people)
  })
}