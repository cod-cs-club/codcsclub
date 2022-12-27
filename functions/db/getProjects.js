import db from '/functions/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default async function getProjects() {
  return new Promise(async resolve => {
    const projects = []
    const snapshot = await getDocs(collection(db, 'projects'))
    snapshot.forEach(doc => {
      const project = doc.data()
      projects.push({
        id: doc.id,
        name: project.name,
        image: project.image,
        description: project.description,
        visit: project.visit,
        repository: project.repository,
        contributors: JSON.parse(project.contributors),
        tags: JSON.parse(project.tags),
        date: project.date
      })
    })

    resolve(projects)
  })
}