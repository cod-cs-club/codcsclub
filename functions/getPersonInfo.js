import people from '../data/people.json'

function getPersonInfo(name) {
  const person = people.find(f => f.name == name)
  if (person) return person
  else return null
}

export default getPersonInfo