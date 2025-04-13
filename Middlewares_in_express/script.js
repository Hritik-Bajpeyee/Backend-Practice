const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")


app.use(express.static("public"))

//middleware 1
app.use((req, res, next) => {

    console.log(req.headers)
    req.hri ="Hritik";
    fs.appendFileSync("public/log.txt", `${Date.now()} is a ${req.method}\n`)
    next()
})


//middleware 2
app.use((req, res, next) => {

    console.log('M1!')
    //If we dont use Next then it can't run more and hang there
    next()
})

//middleware 3
app.use((req, res, next) => {
    console.log('m2!')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!'+ req.hri)
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/Contact', (req, res) => {
    res.send('Hello World with Connect!!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})