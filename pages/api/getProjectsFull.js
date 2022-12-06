import db from '/functions/database'
import tags from '/data/projectTags.json'

export default async function handler(req, res) {
  db.all(`SELECT * FROM People`, (err, rows) => {
    const people = rows
    db.all(`SELECT * FROM Projects`, (err, rows) => {
      const projects = rows.map(row => {
        // Get additional contributor info (name, image).
        const fullContributors = []
        JSON.parse(row.contributors).forEach(contributor => {
          const person = people.find(f => f.id == contributor.id)
          if (!person) return
          contributor.name = person.name
          contributor.image = person.image
          fullContributors.push(contributor)
        })

        // Get additional tag info (name, image).
        const fullTags = []
        JSON.parse(row.tags).forEach(tag => {
          const fullTag = tags.find(f => f.name == tag)
          if (!fullTag) return
          fullTags.push(fullTag)
        })

        return {
          id: row.id,
          name: row.name,
          image: row.image,
          description: row.description,
          visit: row.visit,
          repository: row.repository,
          contributors: fullContributors,
          tags: fullTags,
          date: row.date
        }
      })
      res.status(200).json(projects)
    })
  })
}