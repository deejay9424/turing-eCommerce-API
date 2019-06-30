const conn = require('../config/sqlConfig');
const logger = require('../config/logger').Logger;
const VariableStore = require('../config/VariableStore.json');
const shoppingCartModel = require('../models/shoppingCartModel');

module.exports = {
    generateUniqueID: function (req, res, next) {
        let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        let query = 'INSERT INTO shopping_cart(cart_id) Values ("' + id + '")';
        conn.query(query, (err, result) => {
            if (err) {
                logger.error("Error in Generate Unique Cart ID controller : " + err);
                res.status(VariableStore.Errors.shopping_cart.SHC_00.status)
                    .send(VariableStore.Errors.shopping_cart.SHC_00)
            }
            else {
                res.status(200).send({ "cart_id ": id });
            }
        })
    },
    addProduct: function (req, res, next) {
        let cart_id = req.body.cart_id, product_id = req.body.product_id, attributes = req.body.attributes;
        const query = shoppingCartModel.addProduct + "('" + cart_id + "'," + product_id + ",'" + attributes + "')";
        conn.query(query, (err, result) => {
            if (err) {
                logger.error("Error in add products in Cart controller : " + err);
                res.status(VariableStore.Errors.shopping_cart.SHC_00.status)
                    .send(VariableStore.Errors.shopping_cart.SHC_00)
            }
            else {
                res.status(200).send(result[0]);
            }
        })

    },
    getProducts: function (req, res, next) {
        let id = req.params.id;
        let query = shoppingCartModel.getProducts + '("' + id + '")';
        conn.query(query, (err, result) => {
            if (err) {
                logger.error("Error in get products in Cart controller : " + err);
                res.status(VariableStore.Errors.shopping_cart.SHC_00.status)
                    .send(VariableStore.Errors.shopping_cart.SHC_00)
            }
            else {
                res.status(200).send(result[0]);
            }
        })
    },
    moveToCart: function (req, res, next) {
        let id = req.params.id;
        let query = shoppingCartModel.moveProductToCart + '(' + id + ')';
        conn.query(query, (err, result) => {
            if (err) {
                logger.error("Error in get move products to Cart controller : " + err);
                res.status(VariableStore.Errors.shopping_cart.SHC_00.status)
                    .send(VariableStore.Errors.shopping_cart.SHC_00)
            }
            else {
                res.status(200).send(result[0]);
            }
        })
    },
    totalAmount: function (req, res, next) {
        let id = req.params.id;
        let query = shoppingCartModel.totalAmount + '(' + id + ')';
        conn.query(query, (err, result) => {
            if (err) {
                logger.error("Error in get total amount controller : " + err);
                res.status(VariableStore.Errors.shopping_cart.SHC_00.status)
                    .send(VariableStore.Errors.shopping_cart.SHC_00)
            }
            else {
                res.status(200).send(result[0]);
            }
        })
    },
    saveForLater: function (req, res, next) {
        let id = req.params.id;
        let query = shoppingCartModel.saveProductForLater + '(' + id + ')';
        conn.query(query, (err, result) => {
            if (err) {
                logger.error("Error in get save products for later controller : " + err);
                res.status(VariableStore.Errors.shopping_cart.SHC_00.status)
                    .send(VariableStore.Errors.shopping_cart.SHC_00)
            }
            else {
                res.status(200).send(result[0]);
            }
        })
    },
    getSaved: function (req, res, next) {
        let id = req.params.id;
        let query = shoppingCartModel.getSavedProducts + '(' + id + ')';
        conn.query(query, (err, result) => {
            if (err) {
                logger.error("Error in get saved products controller : " + err);
                res.status(VariableStore.Errors.shopping_cart.SHC_00.status)
                    .send(VariableStore.Errors.shopping_cart.SHC_00)
            }
            else {
                res.status(200).send(result[0]);
            }
        })
    },
    emptyCart: function (req, res, next) {
        let id = req.params.id;
        let query = shoppingCartModel.emptyCart + '(' + id + ')';
        conn.query(query, (err, result) => {
            if (err) {
                logger.error("Error in empty Cart controller : " + err);
                res.status(VariableStore.Errors.shopping_cart.SHC_00.status)
                    .send(VariableStore.Errors.shopping_cart.SHC_00)
            }
            else {
                res.status(200).send(result[0]);
            }
        })
    },
    removeProduct: function (req, res, next) {
        let id = req.params.id;
        let query = shoppingCartModel.removeProduct + '(' + id + ')';
        conn.query(query, (err, result) => {
            if (err) {
                logger.error("Error in remove product controller : " + err);
                res.status(VariableStore.Errors.shopping_cart.SHC_00.status)
                    .send(VariableStore.Errors.shopping_cart.SHC_00)
            }
            else {
                res.status(200).send(result[0]);
            }
        })
    },
    updateCart: function (req, res, next) {
        let id = req.params.id;
        let qty = req.body.quantity;
        let query = shoppingCartModel.updateCart + '(' + id + "," + qty + ')';
        conn.query(query, (err, result) => {
            if (err) {
                logger.error("Error in update Cart controller : " + err);
                res.status(VariableStore.Errors.shopping_cart.SHC_00.status)
                    .send(VariableStore.Errors.shopping_cart.SHC_00)
            }
            else {
                res.status(200).send(result[0]);
            }
        })
    },
}