const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3003

app.use(bodyParser.json())

app.get('/tv-show', (req, res) => res.send('GET'))
app.post('/tv-show', (req, res) => res.send('POST' + JSON.stringify(req.body)))
app.put('/tv-show', (req, res) => res.send('PUT' + JSON.stringify(req.body)))
app.delete('/tv-show/:id', (req, res) => res.send('DELETE' + req.params.id))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))