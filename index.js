const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3003

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

const tvShows = [{
    name: 'Pizza Cat',
    rating: 3,
    imageUrl: 'https://caterville.files.wordpress.com/2013/10/fe0c8-pizza-cat.jpg'
}]

app.get('/tv-show', (req, res) => res.send(tvShows))
app.post('/tv-show', (req, res) => {
    console.log(req.body)
    tvShows.push(req.body)
    res.send({ success: true })
})
app.put('/tv-show', (req, res) => res.send('PUT' + JSON.stringify(req.body)))
app.delete('/tv-show/:id', (req, res) => res.send('DELETE' + req.params.id))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))