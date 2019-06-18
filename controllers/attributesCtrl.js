const conn = require('../config/sqlConfig');
const logger = require('../config/logger').Logger;
const VariableStore = require('../config/VariableStore.json');
const attributeModel = require('../models/attributeModel');
const mysql = require('mysql');

module.exports = {
    getAllAttributes: function(req,res,next){
        conn.query(attributeModel.attributeSP.getAllAttributes, function (err, result, fields) {
            if (err) {
                logger.error("Error in get all attributes controller : " + err);
                res.status(VariableStore.Errors.department.DEP_00.status)
                    .send(VariableStore.Errors.department.DEP_00)
            }
            else {
                res.status(200).send(result[0])
            }
        })
    },
    getSingleAttribute: function(req,res,next){
        try {
            var attribute_id = new Number(req.params.attribute_id)
            if (attribute_id == NaN) {
                logger.error("Error in get one attribute controller : " + err);
                res.status(VariableStore.Errors.attribute.ATT_00.status)
                    .send(VariableStore.Errors.attribute.ATT_00)
            }
        }
        catch (ex) {
            logger.error("Error in get one attribute controller : " + err);
            res.status(VariableStore.Errors.attribute.ATT_00.status)
                .send(VariableStore.Errors.attribute.ATT_00)
        }
        conn.query(attributeModel.attributeSP.getSingleAttribute + "(" + attribute_id + ")",
            function (err, result, fields) {
                if (err) {
                    logger.error("Error in get one attribute controller : " + err);
                    res.status(VariableStore.Errors.attribute.ATT_00.status)
                        .send(VariableStore.Errors.category.ATT_00)
                }
                else {
                    if (result[0].length > 0) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.attribute.ATT_01.status)
                            .send(VariableStore.Errors.attribute.ATT_01)
                    }
                }
            })
    },
    getValuesAttribute: function(req,res,next){
        try {
            var attribute_id = new Number(req.params.attribute_id)
            if (attribute_id == NaN) {
                logger.error("Error in get Values attribute controller : " + err);
                res.status(VariableStore.Errors.attribute.ATT_00.status)
                    .send(VariableStore.Errors.attribute.ATT_00)
            }
        }
        catch (ex) {
            logger.error("Error in get Values attribute controller : " + err);
            res.status(VariableStore.Errors.attribute.ATT_00.status)
                .send(VariableStore.Errors.attribute.ATT_00)
        }
        conn.query(attributeModel.attributeSP.getValuesAttribute + "(" + attribute_id + ")",
            function (err, result, fields) {
                if (err) {
                    logger.error("Error in get Values attribute controller : " + err);
                    res.status(VariableStore.Errors.attribute.ATT_00.status)
                        .send(VariableStore.Errors.attribute.ATT_00)
                }
                else {
                    if (result[0].length > 0) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.attribute.ATT_01.status)
                            .send(VariableStore.Errors.attribute.ATT_01)
                    }
                }
            });
    },
    getAllAttributesWithProductID: function(req,res,next){
        try {
            var product_id = new Number(req.params.product_id)
            if (product_id == NaN) {
                logger.error("Error in get product attribute controller : " + err);
                res.status(VariableStore.Errors.attribute.ATT_00.status)
                    .send(VariableStore.Errors.attribute.ATT_00)
            }
        }
        catch (ex) {
            logger.error("Error in get product attribute controller : " + err);
            res.status(VariableStore.Errors.attribute.ATT_00.status)
                .send(VariableStore.Errors.attribute.ATT_00)
        }
        conn.query(attributeModel.attributeSP.getAttributesWithProductID + "(" + product_id + ")",
            function (err, result, fields) {
                if (err) {
                    logger.error("Error in get product attribute controller : " + err);
                    res.status(VariableStore.Errors.attribute.ATT_00.status)
                        .send(VariableStore.Errors.attribute.ATT_00)
                }
                else {
                    if (result[0].length > 0) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.attribute.ATT_01.status)
                            .send(VariableStore.Errors.attribute.ATT_01)
                    }
                }
            })
    }
}