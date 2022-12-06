import getProjects from '/functions/db/getProjects'

export default async function handler(req, res) {
  const projects = await getProjects()
  res.status(200).json(projects)
}