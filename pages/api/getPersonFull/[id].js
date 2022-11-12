import db from '/database'
import socials from '/data/socials.json'

export default function handler(req, res) {
  const personID = req.query.id
  const people = []
  db.get(`SELECT * FROM People WHERE id = (?1)`, { 1: personID }, (err, row) => {
    db.all(`SELECT * FROM Projects`, (err, rows) => {
      const projects = []
      rows.forEach(project => {
        const contributors = JSON.parse(project.contributors)
        contributors.forEach(contributor => {
          if (contributor.id != row.id) return
          projects.push({
            name: project.name,
            image: project.image,
            note: contributor.note
          })
        })
      })
      
      const fullSocials = []
      JSON.parse(row.socials).forEach(social => {
        const fullSocial = socials.find(f => f.name == social.name)
        if (!fullSocial) return
        fullSocial.link = social.link
        fullSocials.push(fullSocial)
      })

      const info = {
        id: row.id,
        name: row.name,
        image: row.image,
        bio: row.bio,
        role: row.role,
        onteam: row.onteam,
        socials: fullSocials,
        projects: projects,
        date: row.date
      }
      res.status(200).json(info)
    })
  })
}