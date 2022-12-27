import isAdmin from '/functions/isAdmin'
import db from '/functions/firebase'
import { doc, updateDoc } from 'firebase/firestore'

export default async function handler(req, res) {
  if (!isAdmin(req)) return res.status(403).send({ error: 'No permission' })

  // Filter out contributors with id of 0 (aka: No Person Selected).
  const contributors = req.body.info.contributors.filter(f => f.id != 0)

  const projectInfo = {
    name: req.body.info.name,
    description: req.body.info.description,
    image: req.body.info.image,
    visit: req.body.info.visit,
    repository: req.body.info.repository,
    tags: JSON.stringify(req.body.info.tags),
    contributors: JSON.stringify(contributors)
  }

  await updateDoc(doc(db, 'projects', req.body.info.id), projectInfo)
  res.status(200).json({ success: true })
}

export const config = {
  api: { bodyParser: { sizeLimit: '40mb' }}
}