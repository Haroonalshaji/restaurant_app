// 1. import json-server
const jsonServer = require('json-server')

// 2. create a server application using the json-server
const restServer = jsonServer.create()

// 3. setup the path for db.json
const router = jsonServer.router('db.json')

// 4. return a middleware instance used by json-server
const middleware = jsonServer.defaults()

// 5. setup the port for db.json
const port = 3001

// 6. use in server
restServer.use(middleware)
restServer.use(router)

// 7. to run the server(restServer)
restServer.listen(port,()=>{
    console.log("rest server listening on port"+port);
})