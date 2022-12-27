import db from '/functions/firebase'
import { doc, getDoc } from 'firebase/firestore'

import getProjects from './getProjects'
import socials from '/data/socials.json'

export default function getPersonFull(personID) {
  return new Promise(async resolve => {
    // Get projects for contributions info.
    const allProjects = await getProjects()

    // Get person.
    const snapshot = await getDoc(doc(db, 'people', personID))
    if (!snapshot.exists()) resolve(null)
    const person = snapshot.data()

    // Get projects person's contributted to.
    const myProjects = []
    allProjects.forEach(project => {
      project.contributors.forEach(contributor => {
        if (contributor.id != personID) return
        myProjects.push({
          name: project.name,
          image: project.image,
          note: contributor.note
        })
      })
    })

    // Return the person's socials with the correct icon and stuff.
    const fullSocials = socials.flatMap(social => {
      let fullSocial = JSON.parse(person.socials).find(f => f.name == social.name)
      if (!fullSocial) return []
      fullSocial.image = social.image
      return fullSocial
    })

    // Put all the info together.
    const personInfo = {
      id: personID,
      name: person.name,
      image: person.image,
      bio: person.bio,
      role: person.role,
      onteam: person.onteam,
      socials: fullSocials,
      projects: myProjects,
      date: person.date
    }

    resolve(personInfo)
  })
}