const express = require('express')
const http = require('http')
const querystring = require('querystring');
const cors = require('cors');

const app = express()

app.use(cors())

app.get('/api/getTransport', (req, expressResponse) => {
  const apiUrl = 'http://transport.opendata.ch/v1/locations'
  const requestUrl = `${apiUrl}?${req.query.query ? `${querystring.stringify(req.query)}` : 'query=Baden'}`

  http.get(requestUrl, httpGetResponse => {
    const {
      statusCode
    } = httpGetResponse
    let error

    if (statusCode !== 200) {
      error = new Error(`Request Failed (${statusCode})`)
    }

    if (error) {
      console.error(error.message)
      // Consume response data to free up memory
      httpGetResponse.resume()
      return
    }

    httpGetResponse.setEncoding('utf8')

    let rawData = ''
    httpGetResponse.on('data', chunk => {
      rawData += chunk
    })

    httpGetResponse.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        expressResponse.json(parsedData.stations)
      } catch (e) {
        console.error(e.message)
        expressResponse.json(e.message)
      }
    })

  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`)
  })

})

app.get('*', (req, expressResponse) =>{
  expressResponse.json('response of /*')
})

const port = 5000
app.listen(port)
console.log('App is listening on port ' + port)
