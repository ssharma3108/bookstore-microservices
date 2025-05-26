# bookstore-microservices
#Summary of Commands 
cd path/to/bookstore-microservices/<service-name>
npm init -y
npm install express body-parser swagger-ui-express
node index.js


#Swagger Documentation
http://localhost:3001/api-docs — Auth API
http://localhost:3002/api-docs — User API
http://localhost:3003/api-docs — Book API


**📂 Folder Explanation**
Each service contains:
index.js – Entry point
routes/ – Route definitions
controllers/ – Logic for each endpoint
swagger.json – OpenAPI documentation
