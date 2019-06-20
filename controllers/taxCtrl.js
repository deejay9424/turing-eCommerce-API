const conn = require('../config/sqlConfig');
const logger = require('../config/logger').Logger;
const VariableStore = require('../config/VariableStore.json');

module.exports = {
    getAllTax: function (req, res, next) {
        let query = "SELECT * FROM tax"
        conn.query(query, function (err, result, fields) {
            if (err) {
                logger.error("Error in get all tax controller : " + err);
                res.status(VariableStore.Errors.tax.TAX_00.status)
                    .send(VariableStore.Errors.tax.TAX_00)
            }
            else {
                res.status(200).send(result[0])
            }
        })
    },
    getSingleTax: function(req,res,next){
        try {
            var tax_id = new Number(req.params.tax_id)
            if (tax_id == NaN) {
                logger.error("Error in get one tax controller : " + err);
                res.status(VariableStore.Errors.tax.TAX_01.status)
                    .send(VariableStore.Errors.tax.TAX_01)
            }
        }
        catch (ex) {
            logger.error("Error in get one tax controller : " + err);
            res.status(VariableStore.Errors.tax.TAX_01.status)
                .send(VariableStore.Errors.tax.TAX_01)
        }
        let query = "SELECT * FROM tax where tax_id = ";
        conn.query(query + tax_id,function (err, result, fields) {
                if (err) {
                    logger.error("Error in get one tax controller : " + err);
                    res.status(VariableStore.Errors.tax.TAX_00.status)
                        .send(VariableStore.Errors.tax.TAX_00)
                }
                else {
                    if (result[0]) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.tax.TAX_01.status)
                            .send(VariableStore.Errors.tax.TAX_01)
                    }
                }
            })
    }
}