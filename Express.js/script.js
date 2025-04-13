const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World ')
})


app.get('/about', (req, res) => {
    res.send('Hello About!')
})


app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})


app.get('/Blog/intro', (req, res) => {
    res.send('Hello This is!')
})


app.get('/Blog/intro/:slug/:second', (req, res) => {
    
    console.log(req.params)
    console.log(req.slug)
    res.send(`helllo ${req.params.slug} and ${req.params.second}`)
})


// app.get('/Blog/intro-start', (req, res) => {
//     res.send('Hello This is Python!')
// })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
