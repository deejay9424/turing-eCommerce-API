/**
 * @swagger
 * definitions:
 *   Error:
 *      properties:
 *          code:
 *              type: string
 *              example: USR_02
 *          message:
 *              type: string
 *              example: The field example is empty
 *          field:
 *              type: string
 *              example: example
 *          status:
 *              type: integer
 *              example: 500
 */
/**
 * @swagger
 * definitions:
 *   Unauthorized:
 *     properties:
 *       code:
 *         type: string
 *         example: AUT_02
 *       message:
 *         type: string
 *         example: API key is invalid
 *       field:
 *         type: string
 *         example: API_key
 */
/**
 * @swagger
 * tags:
 *   - name: Orders
 *     description: "Everything about orders"
 * /orders:
 *   post:
 *      summary: Create an Order
 *      tags: 
 *          - Orders
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: cart_id
 *          type: string
 *          description: Cart ID
 *          in: formData
 *          required: true
 *        - name: shipping_id 
 *          type: integer
 *          description: Shipping ID
 *          in: formData
 *          required: true
 *        - name: tax_id  
 *          type: integer
 *          description: Tax ID
 *          in: formData
 *          required: true
 *      responses:
 *       200:
 *         description: Return the Order ID
 *         schema:
 *           type: object
 *           properties:
 *              order_id:
 *                type: integer
 *                example: 1
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 *      401:
 *         description: Unauthorized
 *         schema:
 *           $ref: '#/definitions/Unauthorized'
 */
/**
 * @swagger
 * /orders/{order_id}:
 *   get:
 *      summary: Get orders by ID
 *      tags: 
 *          - Orders
 *      description: Return a order by ID
 *      parameters:
 *          - name: order_id
 *            in: path
 *            description: ID of orders
 *            required: true
 *            type: integer
 *            minimum: 1
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a object of Order.
 *         schema:
 *           type: object
 *           properties:
 *              order_id:
 *                type: integer
 *                example: 1
 *              product_id:
 *                type: integer
 *                example: 1 
 *              attributes:
 *                type: string
 *                example: LG, Red
 *              product_name:
 *                type: string
 *                example: Arc d'Triomphe
 *              quantity:
 *                type: integer
 *                example: 1 
 *              unit_cost:
 *                type: string
 *                example: 14.95
 *              subtotal:
 *                type: string
 *                example: 14.95    
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 *      401:
 *         description: Unauthorized
 *         schema:
 *           $ref: '#/definitions/Unauthorized'
 *      404:
 *         description: Error Not Found if params is not a number
 *         schema:
 *           type: object
 *           properties:
 *              message:
 *                type: string
 *                example: Endpoint not found.
 */
/**
 * @swagger
 * /orders/a/inCustomer:
 *   get:
 *      summary: Get order by customer
 *      tags: 
 *          - Orders
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a array of Orders
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 *       401:
 *         description: Unauthorized
 *         schema:
 *           $ref: '#/definitions/Unauthorized'
 */
/**
 * @swagger
 * /orders/shortDetail/{order_id}:
 *   get:
 *      summary: Get info about order
 *      tags: 
 *          - Orders
 *      parameters:
 *          - name: order_id
 *            in: path
 *            description: ID of orders
 *            required: true
 *            type: integer
 *            minimum: 1
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a object of Order.
 *         schema:
 *           type: object
 *           properties:
 *              order_id:
 *                type: integer
 *                example: 1
 *              product_id:
 *                type: integer
 *                example: 1 
 *              attributes:
 *                type: string
 *                example: LG, Red
 *              product_name:
 *                type: string
 *                example: Arc d'Triomphe
 *              quantity:
 *                type: integer
 *                example: 1 
 *              unit_cost:
 *                type: string
 *                example: 14.95
 *              subtotal:
 *                type: string
 *                example: 14.95    
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 *      401:
 *         description: Unauthorized
 *         schema:
 *           $ref: '#/definitions/Unauthorized'
 */
const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/ordersCtrl');

router.post('/', orderCtrl.postOrders);
router.get('/:order_id/', orderCtrl.getSingleOrder);
router.get('/a/inCustomer', orderCtrl.getCustomerOrder);
router.get('/shortDetail/:order_id', orderCtrl.getOrderInfo);

module.exports = router;
