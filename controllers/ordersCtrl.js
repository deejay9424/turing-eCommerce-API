const conn = require('../config/sqlConfig');
const logger = require('../config/logger').Logger;
const VariableStore = require('../config/VariableStore.json');
const ordersModel = require('../models/ordersModel');
const mysql = require('mysql');

module.exports = {
    postOrders: function (req, res, next) {
        try {
            let customer_id = "", query = "";
            let cart_id = req.body.cart_id, shipping_id = req.body.shipping_id, tax_id = req.body.tax_id;
            if (req.user) {
                customer_id = req.user.customer_id;
                query = ordersModel.ordersSP.postOrder + "(" + cart_id + "," + customer_id + "," + shipping_id + "," + tax_id + ")";
                conn.query(query,
                    function (err, result, fields) {
                        if (err) {
                            logger.error("Error in post order controller : " + err);
                            res.status(VariableStore.Errors.orders.ORD_00.status)
                                .send(VariableStore.Errors.orders.ORD_00)
                        }
                        else {
                            if (result[0].length > 0) {
                                res.status(200).send(result[0])
                            }
                            else {
                                res.status(VariableStore.Errors.orders.ORD_01.status)
                                    .send(VariableStore.Errors.orders.ORD_01)
                            }
                        }
                    })
            }
            else {
                logger.error("Error in post order controller, unauthorized : " + err);
                res.status(VariableStore.Errors.Auth.AUT_02.status)
                    .send(VariableStore.Errors.Auth.AUT_02);
            }

        }
        catch (ex) {
            logger.error("Error, Unauthorized user : " + ex);
            res.status(VariableStore.Errors.Auth.AUT_02.status)
                .send(VariableStore.Errors.Auth.AUT_02)
        }

    },
    getSingleOrder: function (req, res, next) {
        if (req.user) {
            try {
                var order_id = new Number(req.params.order_id);
                conn.query(ordersModel.ordersSP.getSingleOrder + "(" + order_id + ")",
                    function (err, result, fields) {
                        if (err) {
                            logger.error("Error in get one order controller : " + err);
                            res.status(VariableStore.Errors.orders.ORD_00.status)
                                .send(VariableStore.Errors.orders.ORD_00)
                        }
                        else {
                            if (result[0].length > 0) {
                                res.status(200).send(result[0])
                            }
                            else {
                                res.status(VariableStore.Errors.orders.ORD_01.status)
                                    .send(VariableStore.Errors.orders.ORD_01)
                            }
                        }
                    })
            }
            catch (ex) {
                logger.error("Error in get one order controller : " + err);
                res.status(VariableStore.Errors.orders.ORD_01.status)
                    .send(VariableStore.Errors.orders.ORD_01)
            }
        }
        else {
            logger.error("Error in get one order controller : Unauthorized");
            res.status(VariableStore.Errors.Auth.AUT_02.status)
                .send(VariableStore.Errors.Auth.AUT_02)
        }


    },
    getCustomerOrder: function (req, res, next) {
        try {
            if (req.user) {
                var customer_id = req.user.customer_id;
                conn.query(ordersModel.ordersSP.getCustomerOrder + "(" + customer_id + ")",
                    function (err, result, fields) {
                        if (err) {
                            logger.error("Error in get customer order controller : " + err);
                            res.status(VariableStore.Errors.orders.ORD_00.status)
                                .send(VariableStore.Errors.orders.ORD_00)
                        }
                        else {
                            if (result[0].length > 0) {
                                res.status(200).send(result[0])
                            }
                            else {
                                res.status(VariableStore.Errors.orders.ORD_01.status)
                                    .send(VariableStore.Errors.orders.ORD_01)
                            }
                        }
                    })
            }
            else {
                logger.error("Error in get customer order controller, unauthorized");
                res.status(VariableStore.Errors.Auth.AUT_02.status)
                    .send(VariableStore.Errors.Auth.AUT_02)
            }
        }
        catch (ex) {
            logger.error("Error in get customer order controller : " + err);
            res.status(VariableStore.Errors.Auth.AUT_02.status)
                .send(VariableStore.Errors.Auth.AUT_02)
        }
    },
    getOrderInfo: function (req, res, next) {
        try {
            var order_id = new Number(req.params.order_id)
            if (order_id == NaN) {
                logger.error("Error in get order info controller : " + err);
                res.status(VariableStore.Errors.orders.ORD_01.status)
                    .send(VariableStore.Errors.orders.ORD_01)
            }
        }
        catch (ex) {
            logger.error("Error in get one order controller : " + err);
            res.status(VariableStore.Errors.orders.ORD_01.status)
                .send(VariableStore.Errors.orders.ORD_01)
        }
        conn.query(ordersModel.ordersSP.getOrderDetails + "(" + order_id + ")",
            function (err, result, fields) {
                if (err) {
                    logger.error("Error in get one order controller : " + err);
                    res.status(VariableStore.Errors.orders.ORD_00.status)
                        .send(VariableStore.Errors.orders.ORD_00)
                }
                else {
                    if (result[0].length > 0) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.orders.ORD_01.status)
                            .send(VariableStore.Errors.orders.ORD_01)
                    }
                }
            })
    }
}