/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
// eslint-disable-next-line strict
'use strict';

const schema = require('../models/products-schema');

const Model = require('./model');



class Products extends Model{


  constructor(){
    super(schema);
  }

}

module.exports = Products;