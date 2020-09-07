Backend (NodeJS - ExpressJS - Mongoose - Docker)

Local installation (npm install - npm run start)
Tests: npm run test

Port: 8080

Needed MongoDB image from Walmart Test running.

(Issues with MongoDB image from Walmart, if root user don't have permissions to run docker, need to put sudo on Makefile or add current user as docker user)

Code coverage using Istanbul - NYC 

----------------------------|---------|----------|---------|---------|-------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------------|---------|----------|---------|---------|-------------------
All files                   |    93.9 |    78.57 |   90.91 |   93.67 |                   
 walmartBackend             |      95 |       75 |     100 |      95 |                   
  app.js                    |      95 |       75 |     100 |      95 | 22                
 walmartBackend/controllers |   88.89 |       75 |     100 |   88.89 |                   
  indexController.js        |     100 |      100 |     100 |     100 |                   
  productsController.js     |    87.5 |       75 |     100 |    87.5 | 11,27             
 walmartBackend/models      |     100 |      100 |     100 |     100 |                   
  Product.js                |     100 |      100 |     100 |     100 |                   
 walmartBackend/routes      |   90.91 |      100 |   66.67 |   90.91 |                   
  index.js                  |     100 |      100 |     100 |     100 |                   
  products.js               |     100 |      100 |     100 |     100 |                   
  routes.js                 |   83.33 |      100 |   66.67 |   83.33 | 17-18             
 walmartBackend/utils       |     100 |    83.33 |     100 |     100 |                   
  utilsFunctions.js         |     100 |    83.33 |     100 |     100 | 1                 
----------------------------|---------|----------|---------|---------|-------------------