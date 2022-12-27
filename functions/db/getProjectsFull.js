import db from '/functions/firebase'
import { collection, getDocs } from 'firebase/firestore'

import tags from '/data/projectTags.json'

export default async function getProjectsFull() {
  return new Promise(async resolve => {
    // Fetch people for contributors info.
    const people = []
    const peopleSnapshot = await getDocs(collection(db, 'people'))
    peopleSnapshot.forEach(doc => {
      const person = doc.data()
      person.id = doc.id
      people.push(person)
    })

    // Fetch projects.
    const projects = []
    const projectsSnapshot = await getDocs(collection(db, 'projects'))
    projectsSnapshot.forEach(doc => {
      const project = doc.data()

      // Get additional contributor info (name, image).
      const fullContributors = []
      JSON.parse(project.contributors).forEach(contributor => {
        const person = people.find(f => f.id == contributor.id)
        if (!person) return
        contributor.name = person.name
        contributor.image = person.image
        fullContributors.push(contributor)
      })
  
      // Get additional tag info (name, image).
      const fullTags = []
      JSON.parse(project.tags).forEach(tag => {
        const fullTag = tags.find(f => f.name == tag)
        if (!fullTag) return
        fullTags.push(fullTag)
      })

      projects.push({
        id: doc.id,
        name: project.name,
        image: project.image,
        description: project.description,
        visit: project.visit,
        repository: project.repository,
        contributors: fullContributors,
        tags: fullTags,
        date: project.date
      })
    })
    
    resolve(projects)
  })
}