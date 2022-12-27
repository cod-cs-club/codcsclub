import isAdmin from '/functions/isAdmin'
import db from '/functions/firebase'
import { doc, updateDoc } from 'firebase/firestore'

export default async function handler(req, res) {
  if (!isAdmin(req)) return res.status(403).send({ error: 'No permission' })

  const personInfo = {
    name: req.body.info.name,
    bio: req.body.info.bio,
    image: req.body.info.image,
    role: req.body.info.role,
    onteam: req.body.info.onteam,
    socials: JSON.stringify(req.body.info.socials)
  }

  await updateDoc(doc(db, 'people', req.body.info.id), personInfo)
  res.status(200).json({ success: true })
}

export const config = {
  api: { bodyParser: { sizeLimit: '40mb' }}
}