import db from '/functions/database'
import socials from '/data/socials.json'

export default function handler(req, res) {
  const people = []
  db.all(`SELECT * FROM People`, (err, rows) => {
    rows.forEach(row => {
      const fullSocials = []
      JSON.parse(row.socials).forEach(social => {
        const fullSocial = socials.find(f => f.name == social.name)
        if (!fullSocial) return
        fullSocial.link = social.link
        fullSocials.push(fullSocial)
      })
      people.push({
        id: row.id,
        name: row.name,
        image: row.image,
        bio: row.bio,
        role: row.role,
        socials: fullSocials,
        date: row.date
      })
    })
    res.status(200).json(people)
  })
}