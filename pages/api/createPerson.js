import isAdmin from '/functions/isAdmin'
import db from '/functions/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default async function handler(req, res) {
  if (!isAdmin(req)) return res.status(403).send({ error: 'No permission' })

  const newPerson = {
    name: req.body.name,
    image: '/defaultPerson.png',
    bio: 'I am studying computer science.',
    role: 'Member',
    onteam: 'true',
    socials: '[]',
    date: Date.now().toString()
  }

  const newDoc = await addDoc(collection(db, 'people'), newPerson)
  res.status(200).json(newDoc.id)
}