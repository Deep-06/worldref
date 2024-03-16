const { ProductModel } = require("../model/product.model")
const { auth } = require("../middleware/authmiddleware")
const express = require('express');

const productRouter = express.Router()

productRouter.post("/add",  async (req, res) => {
    try {
        const product = new ProductModel(req.body)
        await product.save()
        res.status(201).send({ "msg": "Product added", "Product": req.body })
    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

productRouter.get("/", async (req, res) => {
    try {
        const product = await ProductModel.find()
        res.status(200).send(product)
    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

module.exports = {
    productRouter
}