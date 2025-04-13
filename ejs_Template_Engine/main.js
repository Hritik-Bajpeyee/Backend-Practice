const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let sitename = "Addidas"
    let SerachText = "Serach Now"
    let arr =[1,66,44,33,22,11]
  res.render("index",{SiteName: sitename ,SerachText: SerachText,arr})
})

app.get('/', (req, res) => {
    let sitename = "Addidas"
    let SerachText = "Serach Now"
  res.render("index",{SiteName: sitename ,SerachText: SerachText})
})

app.get('/blog/:slug', (req, res) => {
    let Blogtitle = "Addidas why"
    let Blogcontent = "its A Brand"
  res.render("blogpst",{BlogTitle: Blogtitle ,BlogContent: Blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})