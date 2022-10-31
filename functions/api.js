async function getPeople() {
  const result = await fetch(`/api/getPeople`)
  return result.json()
}

async function createPerson(name) {
  const result = await fetch(`/api/createPerson`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  })
  return result.json()
}

async function deletePerson(id) {
  const result = await fetch(`/api/deletePerson`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
  })
  return result.json()
}

async function getProjects() {
  const result = await fetch(`/api/getProjects`)
  return result.json()
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

export default { getPeople, createPerson, deletePerson, getProjects, createProject, deleteProject }