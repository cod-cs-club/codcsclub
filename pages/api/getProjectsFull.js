import getProjectsFull from '/functions/db/getProjectsFull'

export default async function handler(req, res) {
  const projects = await getProjectsFull()
  res.status(200).json(projects)
}