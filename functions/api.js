import tags from '/data/projectTags.json'

async function getPeople() {
  const result = await fetch(`/api/getPeople`)
  return result.json()
}

async function editPerson(info) {
  const result = await fetch(`/api/editPerson`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ info })
  })
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

async function getProjects(options) {
  const projects = await (await fetch(`/api/getProjects`)).json()
  if (options && options.fullInfo) { // Makes project have full contributors and tags info.
    const people = await (await fetch(`/api/getPeople`)).json()
    projects.map(project => {
      const fullContributors = []
      project.contributors.map(contributor => {
        const person = people.find(f => f.id == contributor.id)
        if (!person) return
        person.note = contributor.note
        fullContributors.push(person)
      })
      project.contributors = fullContributors
      
      const fullTags = []
      project.tags.map(tag => {
        const fullTag = tags.find(f => f.name == tag)
        if (!fullTag) return
        fullTags.push(fullTag)
      })
      project.tags = fullTags
    })
    return projects
  }
  else return projects
}

async function editProject(info) {
  console.log('edit')
  console.log(info)
  const result = await fetch(`/api/editProject`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ info })
  })
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

export default { getPeople, editPerson, createPerson, deletePerson, getProjects, editProject, createProject, deleteProject }