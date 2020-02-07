/* eslint-disable no-unused-vars */

const express = require('express');

const categories = require('../models/categories-model');

const categoriesRoute = express.Router();

////////////////////////////
categoriesRoute.get('/categories', getCategories);
categoriesRoute.get('/categories/:id', getCat);
categoriesRoute.post('/categories', postCat);
categoriesRoute.put('/categories/:id', updateCat);
categoriesRoute.delete('/categories/:id', deleteCat);
///////////////////////////

function getCategories(req, res, next) {
  categories.get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    }).catch(next);
}
///////////////////////////

function getCat(req, res, next) {
  categories.get(req.params.id)
    .then(result => res.status(200).json(result[0])) //  an array 
    .catch(next);
}
///////////////////////////

function postCat(req, res, next) {
  categories.create(req.body)
    .then(data => {
      res.status(201).json(data);
    });
}
///////////////////////////

function updateCat(req, res, next) {
  categories.update(req.params.id, req.body)
    .then(data => {
      res.status(201).json(data);
    });
}
///////////////////////////

function deleteCat(req, res, next) {
  const message = 'THE CATEGORY IS DELETED';
  categories.delete(req.params.id)
    .then(data => {
      res.status(200).json({ message });
    });
}
///////////////////////////

module.exports = categoriesRoute;