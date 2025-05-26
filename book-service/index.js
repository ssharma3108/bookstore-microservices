const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger/swagger.json');

const app = express();
app.use(bodyParser.json());

const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(3003, () => {
  console.log('Book Service running on port 3003');
});