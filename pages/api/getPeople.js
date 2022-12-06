import getPeople from '/functions/db/getPeople'

export default async function handler(req, res) {
  const people = await getPeople()
  res.status(200).json(people)
}