const express = require('express')

const app = express()

app.get('/api/getTransport', (req, res) => {
  res.json('response of /api/getTransport')
})

app.get('*', (req, res) =>{
  res.json('response of /*')
});

const port = 5000
app.listen(port)
console.log('App is listening on port ' + port)
