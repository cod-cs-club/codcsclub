import getPersonFull from '/functions/db/getPersonFull'

export default async function handler(req, res) {
  const person = await getPersonFull(req.query.id)
  res.status(200).json(person)
}