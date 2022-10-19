const express = require('express')
const app = express()
const port = 3000

const middleware = function (req, res, next) {
    console.log("Post iseği için istek gönderildi");
    next();
  };

app.get('/hello', (req, res) => {
  res.send('Merhaba, GET isteği attınız')
})
app.post('/hello',middleware, (req, res) => {
    res.send('Merhaba, POST isteği attınız')
  })
app.put('/hello', (req, res) => {
    res.send('Merhaba, PUT isteği attınız')
  })
app.delete('/hello', (req, res) => {
    res.send('Merhaba, DELETE isteği attınız')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})