/* eslint-disable new-cap */
/* eslint-disable no-undef */
// eslint-disable-next-line strict
'use strict ';

const mongoose = require ('mongoose');

const categorietSchema = mongoose.Schema({
  name : { type: String, required: true},
  description: { type: String, required: true},
});

module.exports = mongoose.model('categorietSchema', categorietSchema);