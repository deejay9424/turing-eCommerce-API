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
    addProduct: function(req,res,next){
        let cart_id = req.body.cart_id,product_id = req.body.product_id,attributes = req.body.attributes;
        const query = shoppingCartModel.addProduct+"('"+cart_id+"',"+product_id+",'"+attributes+"')";
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

    }
}