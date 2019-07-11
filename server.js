const express = require('express')
const http = require('http')

const app = express()

app.get('/api/getTransport', (req, expressResponse) => {
  http.get('http://transport.opendata.ch/v1/locations?query=Baden', httpGetResponse => {
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
