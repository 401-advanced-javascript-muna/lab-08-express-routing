/* eslint-disable new-cap */
/* eslint-disable no-undef */
// eslint-disable-next-line strict
'use strict ';

const mongoose = require('mongoose');

const productschema = mongoose.Schema({
  name:{type: String,required:true},
  price:{type: String, required: true },
  weight: { type: String,required: true },
  quantityInStock: {type: String, required: true },
});

module.exports = mongoose.model('productschema',productschema);