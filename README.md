# Transport App
## Setup
1. git clone [https://github.com/niklaushug/konoma-transport-app](https://github.com/niklaushug/konoma-transport-app)
2. cd konoma-transport-app
3. npm install
4. cd client
5. npm install

## Start API Server and Client
* cd konoma-transport-app && yarn start
* cd konoma-transport-app/client && yarn start

## Use Client
Browse [http://localhost:3000/](http://localhost:3000/)

## Use API
API is based on http://transport.opendata.ch/v1/locations and uses the very same query parameter.
> Example http://localhost:5000/api/getTransport?query=Baden (default query)
