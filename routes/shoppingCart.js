/**
 * @swagger
 * definitions:
 *   CartWithProduct:
 *      properties:
 *          item_id:
 *              type: integer
 *              example: 2
 *          name:
 *              type: string
 *              example: ayeee
 *          attributes:
 *              type: string
 *              example: example
 *          product_id:
 *              type: integer
 *              example: 2
 *          price:
 *              type: string
 *              example: 20.11
 *          quantity:
 *              type: integer
 *              example: 2
 *          image:
 *              type: string
 *              example: arc-d-triomphe.gif
 *          subtotal:
 *              type: string
 *              example: 20.11
 */
/**
 * @swagger
 * tags:
 *   - name: Shopping Cart
 *     description: "Everything about Shopping Cart"
 * /shoppingcart/generateUniqueId:
 *   get:
 *      summary: Generate Unique CartID
 *      tags: 
 *          - Shopping Cart
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Json Object with unique Cart ID
 *         schema:
 *           type: object
 *           properties:
 *              cart_id:
 *                type: string
 *                example: xuigbas123
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /shoppingcart/add:
 *   post:
 *      summary: Add a Product in the cart
 *      tags: 
 *          - Shopping Cart
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: cart_id 
 *          in: formData
 *          description: Cart ID
 *          required: true
 *          type: string
 *        - name: product_id 
 *          in: formData
 *          description: Product ID
 *          required: true
 *          type: integer
 *        - name: attributes  
 *          in: formData
 *          description: Attributes of product
 *          required: true
 *          type: string
 *      responses:
 *       200:
 *         description: Return a array of products in the cart
 *         schema:
 *           $ref: '#/definitions/CartWithProduct'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
const express = require('express');
const router = express.Router();
const shoppingcartCtrl = require('../controllers/shoppingCartCtrl');

router.get('/generateUniqueId', shoppingcartCtrl.generateUniqueID);
router.post('/add', shoppingcartCtrl.addProduct);

module.exports = router;
