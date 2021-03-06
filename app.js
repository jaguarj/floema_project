require('dotenv').config()

console.log("+++++++++++++++", process.env.PRISMIC_ENDPOINT, process.env.PRISMIC_CLIENT_ID, "+++++++++++++++")

const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.get('/about', (req, res) => {
  res.render('pages/about')
})

app.get('/collections', (req, res) => {
  res.render('pages/collections')
})

app.get('/details/:id', (req, res) => {
  res.render('pages/details')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
