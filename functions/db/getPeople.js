import db from '/functions/firebase'
import { collection, getDocs } from 'firebase/firestore'

import roles from '/data/roles.json'

export default async function getPeople() {
  return new Promise(async resolve => {
    const people = []
    const snapshot = await getDocs(collection(db, 'people'))
    snapshot.forEach(doc => {
      const person = doc.data()
      people.push({
        id: doc.id,
        name: person.name,
        image: person.image,
        bio: person.bio,
        role: person.role,
        onteam: person.onteam,
        socials: JSON.parse(person.socials),
        date: person.date
      })
    })

    // Sort people by highest role.
    const sortedPeople = roles.flatMap(role => {
      return people.filter(person => person.role == role.name)
    })

    resolve(sortedPeople)
  })
}