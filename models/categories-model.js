/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
// eslint-disable-next-line strict
'use strict';

const schema = require('./categories-schema');

const Model = require('./model');

class Categories extends Model{
  constructor(){
    super(schema);
  }

}

module.exports = Categories;