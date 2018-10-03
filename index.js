const express = require('express')
const bodyParser = require('body-parser')
const db = require('monk')('mongodb://admin:password1@ds050077.mlab.com:50077/tv-demo')
const app = express()
const port = 3003
const tvShowsCollection = db.get('tvShows')

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

app.get('/tv-show', async (req, res) => {
    const tvShows = await tvShowsCollection.find({})
    res.send(tvShows)
})

app.post('/tv-show', (req, res) => {
    console.log(req.body)
    const savedTvShow = tvShowsCollection.insert(req.body)
    res.send(savedTvShow)
})

app.put('/tv-show', (req, res) => res.send('PUT' + JSON.stringify(req.body)))

app.delete('/tv-show/:id', (req, res) => res.send('DELETE' + req.params.id))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))