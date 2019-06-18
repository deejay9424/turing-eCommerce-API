const conn = require('../config/sqlConfig');
const logger = require('../config/logger').Logger;
const VariableStore = require('../config/VariableStore.json');
const categoryModel = require('../models/categoryModel');
const mysql = require('mysql');

module.exports = {
    getAllCategory: function (req, res, next) {
        let startNum = 0;
        let LimitNum = 10;
        let count =0;
        let order = "";
        //To calculate Total Count use MySQL count function
        var query = "Select count(*) as count from ??";
        var table = ["category"];
        query = mysql.format(query, table);
        conn.query(query, function (err, rows, fields) {
            if (err) {
                logger.error("Error in get all Category controller : " + err);
                res.status(VariableStore.Errors.category.CAT_00.status)
                    .send(VariableStore.Errors.category.CAT_00)
            }
            else {
                count = rows[0].count
                if (req.query.page === undefined){
                    startNum = 0;
                }
                else {
                    startNum = parseInt(req.query.page);
                }
                if( req.query.limit === undefined ){
                    LimitNum = 20;
                }
                else{
                    LimitNum = parseInt(req.query.limit);
                }
                var query = `Select * from ?? ORDER BY category_id DESC limit ? OFFSET ?`;
                //Mention table from where you want to fetch records example-users & send limit and start 
                var table = ["category", LimitNum, startNum];
                query = mysql.format(query, table);
                conn.query(query, function (err, rest) {
                    if (err) {
                        logger.error("Error in get all Category controller : " + err);
                        res.status(VariableStore.Errors.category.CAT_00.status)
                            .send(VariableStore.Errors.category.CAT_00)
                    }
                    else {
                        // Total Count varibale display total Count in Db and data display the records
                        res.status(200).send({ "Count": count, "rows": rest });
                    }
                });
            }

        })
    },
    getSingleCategory: function (req, res, next) {
        try {
            var category_id = new Number(req.params.category_id)
            if (category_id == NaN) {
                logger.error("Error in get one category controller : " + err);
                res.status(VariableStore.Errors.category.CAT_00.status)
                    .send(VariableStore.Errors.category.CAT_00)
            }
        }
        catch (ex) {
            logger.error("Error in get one category controller : " + err);
            res.status(VariableStore.Errors.category.CAT_00.status)
                .send(VariableStore.Errors.category.CAT_00)
        }
        conn.query(categoryModel.categorySP.getSingleCategory + "(" + category_id + ")",
            function (err, result, fields) {
                if (err) {
                    logger.error("Error in get one category controller : " + err);
                    res.status(VariableStore.Errors.category.CAT_00.status)
                        .send(VariableStore.Errors.category.CAT_00)
                }
                else {
                    if (result[0].length > 0) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.category.CAT_01.status)
                            .send(VariableStore.Errors.category.CAT_01)
                    }
                }
            })
    },
    getProductCategory: function(req,res,next){
        try {
            var product_id = new Number(req.params.product_id)
            if (product_id == NaN) {
                logger.error("Error in get Product category controller : " + err);
                res.status(VariableStore.Errors.category.CAT_00.status)
                    .send(VariableStore.Errors.category.CAT_00)
            }
        }
        catch (ex) {
            logger.error("Error in get product category controller : " + err);
            res.status(VariableStore.Errors.category.CAT_00.status)
                .send(VariableStore.Errors.category.CAT_00)
        }
        conn.query(categoryModel.categorySP.getProductCategory + "(" + product_id + ")",
            function (err, result, fields) {
                if (err) {
                    logger.error("Error in get product category controller : " + err);
                    res.status(VariableStore.Errors.category.CAT_00.status)
                        .send(VariableStore.Errors.category.CAT_00)
                }
                else {
                    if (result[0].length > 0) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.category.CAT_01.status)
                            .send(VariableStore.Errors.category.CAT_01)
                    }
                }
            })
    },
    getDepartmentCategories: function(req,res,next){
        try {
            var department_id = new Number(req.params.department_id)
            if (department_id == NaN) {
                logger.error("Error in get Department category controller : " + err);
                res.status(VariableStore.Errors.category.CAT_00.status)
                    .send(VariableStore.Errors.category.CAT_00)
            }
        }
        catch (ex) {
            logger.error("Error in get Department category controller : " + err);
            res.status(VariableStore.Errors.category.CAT_00.status)
                .send(VariableStore.Errors.category.CAT_00)
        }
        conn.query(categoryModel.categorySP.getDepartmentCategories + "(" + department_id + ")",
            function (err, result, fields) {
                if (err) {
                    logger.error("Error in get department category controller : " + err);
                    res.status(VariableStore.Errors.category.CAT_00.status)
                        .send(VariableStore.Errors.category.CAT_00)
                }
                else {
                    if (result[0].length > 0) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.category.CAT_01.status)
                            .send(VariableStore.Errors.category.CAT_01)
                    }
                }
            })
    },
}