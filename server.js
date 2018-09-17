const express = require('express')
const bodyParser = require ('body-parser')

const app = express()

app.use(express.static(__dirname + '/portfolio'))

app.use(bodyParser.json())
app.listen(7003, ()=> {
console.log('Listening on port 7003')
})