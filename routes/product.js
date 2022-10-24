const express = require('express');
// const { restart } = require('nodemon');
const Product = require('../models/Product');

const router = express.Router();

router.get('/', (req, res) => {
    Product.find()
        .then((product) => {
            res.json(product);
        })
        .catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => res.json(err));
})

router.post('/', (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,

    })
    product.save();
    res.json(product)
    // res.send("Create Product")
})

router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,

    })
        .then((product) => {
            res.json(product);
        })
        .catch((err) => res.json(err));
})

router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => res.json(err));
})

module.exports = router;

const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        description: "Product 1 description",
    }
]