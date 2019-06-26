const conn = require('../config/sqlConfig');
const logger = require('../config/logger').Logger;
const VariableStore = require('../config/VariableStore.json');
const productsModel = require('../models/productsModel');
const mysql = require('mysql');

module.exports = {
    getAllProducts: function (req, res, next) {
        let startNum = 1;
        let LimitNum = 20;
        let descLimit = 200;
        let count = 0;
        if (req.query.page === undefined) {
            startNum = 1;
        }
        else {
            startNum = parseInt(req.query.page);
        }
        if (req.query.limit === undefined) {
            LimitNum = 20;
        }
        else {
            LimitNum = parseInt(req.query.limit);
        }
        if (req.query.descLimit === undefined) {
            descLimit = 200;
        }
        else {
            descLimit = parseInt(req.query.descLimit);
        }
        var query = productsModel.productsSP.getAllProducts + "(" + descLimit + "," + LimitNum + "," + startNum + ")";
        conn.query(query, function (err, rest) {
            if (err) {
                logger.error("Error in get all products controller : " + err);
                res.status(VariableStore.Errors.products.PRO_00.status)
                    .send(VariableStore.Errors.products.PRO_00)
            }
            else {
                count = rest[0].length;
                // Total Count varibale display total Count in Db and data display the records
                res.status(200).send({ "Count": count, "rows": rest[0] });
            }
        });
    },
    searchProducts: function (req, res, next) {
        let query_string = '%' + req.query.query_string + '%', startNum = 1, LimitNum = 20, count = 0;
        if (req.query.page === undefined) {
            startNum = 0;
        }
        else {
            startNum = parseInt(req.query.page);
        }
        if (req.query.limit === undefined) {
            LimitNum = 20;
        }
        else {
            LimitNum = parseInt(req.query.limit);
        }
        if (req.query.descLimit === undefined) {
            descLimit = 200;
        }
        else {
            descLimit = parseInt(req.query.descLimit);
        }
        var query = 'SELECT * FROM product WHERE name LIKE ? ORDER BY ? DESC LIMIT ?';
        var table = [query_string, startNum, LimitNum];
        query = mysql.format(query, table);
        conn.query(query, function (err, rest) {
            if (err) {
                logger.error("Error in search products controller : " + err);
                res.status(VariableStore.Errors.products.PRO_00.status)
                    .send(VariableStore.Errors.products.PRO_00)
            }
            else {
                count = rest[0].length;
                // Total Count varibale display total Count in Db and data display the records
                res.status(200).send({ "Count": count, "rows": rest });
            }
        });
    },
    getProductByID: function (req, res, next) {
        try {
            var product_id = new Number(req.params.product_id)
            if (product_id == NaN) {
                logger.error("Error in get one product controller : " + err);
                res.status(VariableStore.Errors.products.PRO_01.status)
                    .send(VariableStore.Errors.products.PRO_01)
            }
        }
        catch (ex) {
            logger.error("Error in get one product controller : " + err);
            res.status(VariableStore.Errors.products.PRO_01.status)
                .send(VariableStore.Errors.products.PRO_01)
        }
        conn.query(productsModel.productsSP.getSingleProduct + "(" + product_id + ")",
            function (err, result, fields) {
                if (err) {
                    logger.error("Error in get one product controller : " + err);
                    res.status(VariableStore.Errors.products.PRO_00.status)
                        .send(VariableStore.Errors.products.PRO_00)
                }
                else {
                    if (result[0].length > 0) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.products.PRO_01.status)
                            .send(VariableStore.Errors.products.PRO_01)
                    }
                }
            })
    },
    getProductByCategory: function (req, res, next) {
        let category_id = req.params.category_id, startNum = 1, LimitNum = 20, count = 0;
        if (req.query.page === undefined) {
            startNum = 0;
        }
        else {
            startNum = parseInt(req.query.page);
        }
        if (req.query.limit === undefined) {
            LimitNum = 20;
        }
        else {
            LimitNum = parseInt(req.query.limit);
        }
        if (req.query.descLimit === undefined) {
            descLimit = 200;
        }
        else {
            descLimit = parseInt(req.query.descLimit);
        }
        var query = productsModel.productsSP.getProductsByCategory + "(" + category_id + "," + descLimit + "," + LimitNum + "," + startNum + ")";
        conn.query(query, function (err, rest) {
            if (err) {
                logger.error("Error in get products by category controller : " + err);
                res.status(VariableStore.Errors.products.PRO_00.status)
                    .send(VariableStore.Errors.products.PRO_00)
            }
            else {
                count = rest[0].length;
                // Total Count varibale display total Count in Db and data display the records
                res.status(200).send({ "Count": count, "rows": rest });
            }
        });
    },
    getProductByDepartment: function (req, res, next) {
        let department_id = req.params.department_id, startNum = 1, LimitNum = 20, count = 0;
        if (req.query.page === undefined) {
            startNum = 0;
        }
        else {
            startNum = parseInt(req.query.page);
        }
        if (req.query.limit === undefined) {
            LimitNum = 20;
        }
        else {
            LimitNum = parseInt(req.query.limit);
        }
        if (req.query.descLimit === undefined) {
            descLimit = 200;
        }
        else {
            descLimit = parseInt(req.query.descLimit);
        }
        var query = productsModel.productsSP.getProductsByDepartment + "(" + department_id + "," + descLimit + "," + LimitNum + "," + startNum + ")";
        conn.query(query, function (err, rest) {
            if (err) {
                logger.error("Error in get products by department controller : " + err);
                res.status(VariableStore.Errors.products.PRO_00.status)
                    .send(VariableStore.Errors.products.PRO_00)
            }
            else {
                count = rest[0].length;
                // Total Count varibale display total Count in Db and data display the records
                res.status(200).send({ "Count": count, "rows": rest });
            }
        });
    },
    getProductDetails: function (req, res, next) {
        try {
            var product_id = new Number(req.params.product_id)
            if (product_id == NaN) {
                logger.error("Error in get product details controller : " + err);
                res.status(VariableStore.Errors.products.PRO_01.status)
                    .send(VariableStore.Errors.products.PRO_01)
            }
        }
        catch (ex) {
            logger.error("Error in get product details controller : " + err);
            res.status(VariableStore.Errors.products.PRO_01.status)
                .send(VariableStore.Errors.products.PRO_01)
        }
        conn.query(productsModel.productsSP.getProductDetails + "(" + product_id + ")",
            function (err, result, fields) {
                if (err) {
                    logger.error("Error in get product details controller : " + err);
                    res.status(VariableStore.Errors.products.PRO_00.status)
                        .send(VariableStore.Errors.products.PRO_00)
                }
                else {
                    if (result[0].length > 0) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.products.PRO_01.status)
                            .send(VariableStore.Errors.products.PRO_01)
                    }
                }
            })
    },
    getProductLocations: function (req, res, next) {
        try {
            var product_id = new Number(req.params.product_id)
            if (product_id == NaN) {
                logger.error("Error in get product locations controller : " + err);
                res.status(VariableStore.Errors.products.PRO_01.status)
                    .send(VariableStore.Errors.products.PRO_01)
            }
        }
        catch (ex) {
            logger.error("Error in get product locations controller : " + err);
            res.status(VariableStore.Errors.products.PRO_01.status)
                .send(VariableStore.Errors.products.PRO_01)
        }
        conn.query(productsModel.productsSP.getProductLocations + "(" + product_id + ")",
            function (err, result, fields) {
                if (err) {
                    logger.error("Error in get product locations controller : " + err);
                    res.status(VariableStore.Errors.products.PRO_00.status)
                        .send(VariableStore.Errors.products.PRO_00)
                }
                else {
                    if (result[0].length > 0) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.products.PRO_01.status)
                            .send(VariableStore.Errors.products.PRO_01)
                    }
                }
            })
    },
    getProductReviews: function (req, res, next) {
        try {
            var product_id = new Number(req.params.product_id)
            if (product_id == NaN) {
                logger.error("Error in get product reviews controller : " + err);
                res.status(VariableStore.Errors.products.PRO_01.status)
                    .send(VariableStore.Errors.products.PRO_01)
            }
        }
        catch (ex) {
            logger.error("Error in get product reviews controller : " + err);
            res.status(VariableStore.Errors.products.PRO_01.status)
                .send(VariableStore.Errors.products.PRO_01)
        }
        conn.query(productsModel.productsSP.getProductReviews + "(" + product_id + ")",
            function (err, result, fields) {
                if (err) {
                    logger.error("Error in get product reviews controller : " + err);
                    res.status(VariableStore.Errors.products.PRO_00.status)
                        .send(VariableStore.Errors.products.PRO_00)
                }
                else {
                    if (result[0].length > 0) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.products.PRO_01.status)
                            .send(VariableStore.Errors.products.PRO_01)
                    }
                }
            })
    },
    postProductReviews: function (req, res, next) {
        try {
            let product_id = new Number(req.params.product_id)
            if (product_id == NaN) {
                logger.error("Error in POST product reviews controller : " + err);
                res.status(VariableStore.Errors.products.PRO_01.status)
                    .send(VariableStore.Errors.products.PRO_01)
            }
            else {
                let customer_id = req.user.customer_id;
                let review = req.body.review, rating = req.body.rating;
                conn.query(productsModel.productsSP.postProductReview + "(" + customer_id + "," + product_id + ",'" + review + "','" + rating + "')",
                    function (err, result, fields) {
                        if (err) {
                            logger.error("Error in post product reviews controller : " + err);
                            res.status(VariableStore.Errors.products.PRO_00.status)
                                .send(VariableStore.Errors.products.PRO_00)
                        }
                        else {
                            res.status(200).send("Data Saved")
                        }
                    })
            }

        }
        catch (ex) {
            logger.error("Error, Unauthorized user : " + ex);
            res.status(VariableStore.Errors.Auth.AUT_02.status)
                .send(VariableStore.Errors.Auth.AUT_02)
        }

    }
}