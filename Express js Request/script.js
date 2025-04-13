const express = require('express')
const blog = require('./router/blog')


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog)

app.get('/', (req, res) => {
    console.log("Get")
    res.send('Hello World')

})

app.post('/', (req, res) => {
    console.log("Post")
    res.send('Hello World using Post')
})

app.put('/', (req, res) => {
    console.log("Put")
    res.send('Hello World using Put')
})

app.delete('/', (req, res) => {
    console.log("Delete")
    res.send('Hello World using Delete')
})


//Setting HTML
app.get("/about",(req,res)=>{
    console.log("Using HTML!!!")
    res.sendFile('templates/about.html',{root: __dirname})
})

app.get("/api",(req,res)=>{
   res.json({a:1,b:2,c:3,d:4,name:["harr,parr"]})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})