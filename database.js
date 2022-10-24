// Create our sqlite database.
const sqlite = require('sqlite3')
const db = new sqlite.Database('./database.db')

// Create database tables.
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS Projects (
    id INTEGER PRIMARY KEY,
    name TEXT DEFAULT 'New Project',
    image TEXT DEFAULT '/defaultProject.png',
    description TEXT DEFAULT 'This is a cool project.',
    visit TEXT DEFAULT 'https://example.com/',
    repository TEXT DEFAULT 'https://github.com/',
    contributors TEXT DEFAULT '[]',
    tags TEXT DEFAULT '[]',
    date TEXT DEFAULT '')`
  )
})

export default db