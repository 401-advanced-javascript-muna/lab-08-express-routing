/* eslint-disable no-unused-vars */
'use stricts ';

const express = require('express');


const products = require('../models/products-model');


const productsRoute = express.Router();

productsRoute.get('/products', getProdocts);
productsRoute.get('/products/:id', getProd);
productsRoute.post('/products', postProd);
productsRoute.put('/products/:id', updateProd);
productsRoute.delete('/products/:id', deleteProd);

//////////////////////////////////////////
function getProdocts(req, res, next) {
  products.get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    }).catch(next);
}
////////////////////////////////////////////////
function getProd(req, res, next) {
  products.get(req.params.id)
    .then(result => res.status(200).json(result[0]))
    .catch(next);
}
//////////////////////////////////////
function postProd(req, res, next) {
  products.create(req.body)
    .then(data => {
      res.status(201).json(data);
    });
}
////////////////////////////////////////
function updateProd(req,res,next){
  products.update(req.params.id,req.body)
    .then(data=>{
      res.status(201).json(data);
    });
}
////////////////////////////////////////
function deleteProd(req,res,next){
  const message = 'THE PRODUCT IS DELETED';
  //   console.log('req.params.id : ', req.params.id);
  products.delete(req.params.id)
    .then(data=>{
      res.status(200).json({message});
    }).catch((err)=>console.error(err));
}
//////////////////////////////////////////////////////

module.exports = productsRoute;