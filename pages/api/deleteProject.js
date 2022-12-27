import isAdmin from '/functions/isAdmin'
import db from '/functions/firebase'
import { doc, deleteDoc } from 'firebase/firestore'

export default async function handler(req, res) {
  if (!isAdmin(req)) return res.status(403).send({ error: 'No permission' })

  try {
    await deleteDoc(doc(db, 'projects', req.body.id))
    res.status(200).json({ success: true })
  }
  catch (err) {
    console.log(err)
    res.status(200).json({ success: false })
  }
}