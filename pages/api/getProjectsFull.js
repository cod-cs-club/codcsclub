import db from '/functions/database'
import tags from '/data/projectTags.json'

import getProjectsFull from '/functions/db/getProjectsFull'

export default async function handler(req, res) {
  const projects = await getProjectsFull()
  console.log(projects)
  res.status(200).json([])
}