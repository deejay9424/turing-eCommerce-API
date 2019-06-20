const conn = require('../config/sqlConfig');
const logger = require('../config/logger').Logger;
const VariableStore = require('../config/VariableStore.json');

module.exports = {
    getAllShippingRegions: function (req, res, next) {
        let query = "CALL customer_get_shipping_regions ()"
        conn.query(query, function (err, result, fields) {
            if (err) {
                logger.error("Error in get all shipping region controller : " + err);
                res.status(VariableStore.Errors.shipping.SHP_00.status)
                    .send(VariableStore.Errors.shipping.SHP_00)
            }
            else {
                res.status(200).send(result[0])
            }
        })
    },
    getSingleShippingRegion: function(req,res,next){
        try {
            var shipping_region_id = new Number(req.params.shipping_region_id)
            if (shipping_region_id == NaN) {
                logger.error("Error in get one shipping region controller : " + err);
                res.status(VariableStore.Errors.shipping.SHP_01.status)
                    .send(VariableStore.Errors.shipping.SHP_01)
            }
        }
        catch (ex) {
            logger.error("Error in get one shipping region controller : " + err);
            res.status(VariableStore.Errors.shipping.SHP_01.status)
                .send(VariableStore.Errors.shipping.SHP_01)
        }
        let query = "SELECT * FROM shipping_region where shipping_region_id = ";
        conn.query(query + shipping_region_id,function (err, result, fields) {
                if (err) {
                    logger.error("Error in get one shipping region controller : " + err);
                    res.status(VariableStore.Errors.shipping.SHP_00.status)
                        .send(VariableStore.Errors.shipping.SHP_00)
                }
                else {
                    if (result[0].length > 0) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.shipping.SHP_01.status)
                            .send(VariableStore.Errors.shipping.SHP_01)
                    }
                }
            })
    }
}