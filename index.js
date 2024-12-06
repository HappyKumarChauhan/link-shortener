const express = require('express')
const app = express()
const link = require('./link')
const shortid = require('shortid')
const port = 3000
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set('view engine','ejs');

app.get('/', async (req, res) => {
  res.render('index')
})
app.post('/generatelink', async (req, res) => {
    const longUrl=req.body.longUrl;
    const shortUrl = shortid.generate();
    const li=new link({
        longUrl:longUrl,
        shortUrl:shortUrl
    })
    await li.save();
    const shortLink=`http://localhost:3000/shortlink/${shortUrl}`
    res.json({"shortLink" :shortLink});
  })
app.get('/shortlink/:url', async (req, res) => {
  const url=req.params.url;
  const data=await link.findOne({shortUrl:url})
  const longUrl=data.longUrl;
  res.redirect(longUrl);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
