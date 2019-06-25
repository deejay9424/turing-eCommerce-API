/**
 * @swagger
 * definitions:
 *   Customer:
 *      properties:
 *          customer_id:
 *              type: integer
 *              example: 1
 *          name:
 *              type: string
 *              example: Lanuuchi
 *          email:
 *              type: string
 *              example: "lanucchi@gmail.com"
 *          address_1:
 *              type: string
 *              example: QI 19
 *          address_2:
 *              type: string
 *              example: abcd
 *          city:
 *              type: string
 *              example: Kualalumpur
 *          region:
 *              type: string
 *              example: xyz
 *          postal_code:
 *              type: string
 *              example: 21423
 *          country:
 *              type: string
 *              example: Malaysia
 *          shipping_region_id:
 *              type: integer
 *              example: 1
 *          day_phone:
 *              type: string
 *              example: +894520020
 *          eve_phone:
 *              type: string
 *              example: +755566322
 *          mob_phone:
 *              type: string
 *              example: +456688200
 *          credit_card:
 *              type: string
 *              example: XXXXXXXXXXX5346
 */
/**
 * @swagger
 * tags:
 *   - name: Customers
 *     description: "Everything about customers"
 * /customer:
 *   get:
 *      summary: Get a customer by ID. The customer is getting by Token.
 *      tags: 
 *          - Customers
 *      produces:
 *        - application/json
 *      security:
 *       - UserSecurity: []
 *      responses:
 *       200:
 *         description: Return a Object of Customer with auth credencials
 *         schema:
 *           $ref: '#/definitions/Customer'
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
 * /customer:
 *   post:
 *      summary: Register a Customer
 *      tags: 
 *          - Customers
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: name
 *          in: formData
 *          description: Name of user
 *          required: true
 *          type: string
 *        - name: email
 *          in: formData
 *          description: Email of user
 *          required: true
 *          type: string
 *        - name: password
 *          in: formData
 *          description: Password of user
 *          required: true
 *          type: string
 *      responses:
 *       200:
 *         description: Return a Object of Customer with auth credencials
 *         schema:
 *           $ref: '#/definitions/Customer'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /customer/login:
 *   post:
 *      summary: Sign in the application
 *      tags: 
 *          - Customers
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: email
 *          in: formData
 *          description: Email of user
 *          required: true
 *          type: string
 *        - name: password
 *          in: formData
 *          description: Password of user
 *          required: true
 *          type: string
 *      responses:
 *       200:
 *         description: Return a Object of Customer with auth credencials
 *         schema:
 *           $ref: '#/definitions/Customer'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
const express = require('express');
const router = express.Router();
const customerCtrl = require('../controllers/customerCtrl');
const authCtrl = require('../controllers/authController');

router.get('/', authCtrl, customerCtrl.getCustomerByID);
router.post('/login', customerCtrl.loginCtrl);
router.post('/', customerCtrl.registerCtrl);

module.exports = router;