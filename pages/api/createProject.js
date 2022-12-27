import isAdmin from '/functions/isAdmin'
import db from '/functions/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default async function handler(req, res) {
  if (!isAdmin(req)) return res.status(403).send({ error: 'No permission' })

  const newProject = {
    name: req.body.name,
    image: '/defaultProject.png',
    description: 'This is a cool project.',
    visit: 'https://example.com/',
    repository: 'https://github.com/',
    contributors: '[]',
    tags: '[]',
    date: Date.now().toString()
  }

  const newDoc = await addDoc(collection(db, 'projects'), newProject)
  res.status(200).json(newDoc.id)
}