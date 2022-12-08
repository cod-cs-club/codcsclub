import db from '/functions/database'
import socials from '/data/socials.json'

export default function getPersonFull(personID) {
  return new Promise(resolve => {
    db.get(`SELECT * FROM People WHERE id = (?1)`, { 1: personID }, (err, row) => {
      db.all(`SELECT * FROM Projects`, (err, rows) => {
  
        // Get all the projects the person contributted to.
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
        
        // Return the person's socials with the correct icon and stuff.
        const fullSocials = socials.flatMap(social => {
          let fullSocial = JSON.parse(row.socials).find(f => f.name == social.name)
          if (!fullSocial) return []
          fullSocial.image = social.image
          return fullSocial
        })
  
        // Put all the info together.
        const personInfo = {
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
        
        resolve(personInfo)
      })
    })
  })
}