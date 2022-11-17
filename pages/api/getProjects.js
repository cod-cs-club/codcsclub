import db from '/functions/database'

export default async function handler(req, res) {
  const projects = []
  db.all(`SELECT * FROM Projects`, (err, rows) => {
    rows.forEach(row => {
      projects.push({
        id: row.id,
        name: row.name,
        image: row.image,
        description: row.description,
        visit: row.visit,
        repository: row.repository,
        contributors: JSON.parse(row.contributors),
        tags: JSON.parse(row.tags),
        date: row.date
      })
    })
    res.status(200).json(projects)
  })
}