async function getProjects() {
  const result = await fetch(`/api/getProjects`)
  const data = await result.json()
  return data
}

async function createProject(name) {
  const result = await fetch(`/api/createProject`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  })
  return result.json()
}

async function deleteProject(id) {
  const result = await fetch(`/api/deleteProject`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
  })
  return result.json()
}

export default { getProjects, createProject, deleteProject }