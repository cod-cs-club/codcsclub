// Start express app server.
const express = require('express')
const app = express()

// Create our sqlite database.
const sqlite = require('sqlite3')
const db = new sqlite.Database('./database.db')

app.get('/api', async (req, res) => {
  console.log("API")
})

// Make our express server listen to a port.
const server = app.listen(3001, () => {
  console.log('Express server is running!')
})