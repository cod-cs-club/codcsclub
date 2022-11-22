import db from '/functions/database'
import roles from '/data/roles.json'

export default function handler(req, res) {
  db.all(`SELECT * FROM People`, (err, rows) => {
    const people = rows.map(row => {
      return {
        id: row.id,
        name: row.name,
        image: row.image,
        bio: row.bio,
        role: row.role,
        onteam: row.onteam,
        socials: JSON.parse(row.socials),
        date: row.date
      }
    })

    // Sort people by highest role.
    const sortedPeople = roles.flatMap(role => {
      return people.filter(person => person.role == role.name)
    })

    res.status(200).json(sortedPeople)
  })
}