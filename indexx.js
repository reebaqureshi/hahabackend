console.log("reeba's backend")
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/malaabis', (req, res) => {
    res.send("<h1>VISIT INSTAGRAM FOR NEW CLOTHS<h1>")
  })
  app.get('/youtube', (req, res) => {
    res.send("<h2>het there<h2>")

  })
  app.get('/login', (req, res) => {
    res.send("<h2>enter your password<h2>")
    
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
