'use strict ';


const express= require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const categoriesRoutes = require('../routes/categories-routes');

const productsRoutes = require('../routes/products-routes');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1',categoriesRoutes );
app.use('/api/v1',productsRoutes);

const errorHandler = require('../middleware/error-500');
const notFound = require('../middleware/error-404');

app.use(notFound);
app.use(errorHandler);


module.exports = {
  server:app,
  start:port => {
    let PORT =port || process.env.PORT || 3000;
    app.listen(PORT,()=> console.log(`YOUR SERVER IS UP ON ${PORT}`));
  },


};



