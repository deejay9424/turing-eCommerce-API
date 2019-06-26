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
/**
 * @swagger
 * /customer:
 *   put:
 *      summary: Update a customer
 *      tags: 
 *          - Customers
 *      produces:
 *        - application/json
 *      security:
 *       - UserSecurity: []
 *      parameters:
 *        - name: name
 *          in: formData
 *          description: Customer Name
 *          required: true
 *          type: string
 *        - name: email
 *          in: formData
 *          description: Customer email
 *          required: true
 *          type: string
 *        - name: password
 *          in: formData
 *          description: Customer Password
 *          type: string
 *        - name: day_phone
 *          in: formData
 *          description: Customer day phone
 *          type: string
 *        - name: eve_phone
 *          in: formData
 *          description: Customer eve phone
 *          type: string
 *        - name: mob_phone
 *          in: formData
 *          description: Customer mobile phone
 *          type: string
 *      responses:
 *       200:
 *         description: A Customer Object
 *         schema:
 *           $ref: '#/definitions/Customer'
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
 * /customer/address:
 *   put:
 *      summary: Update the address from customer
 *      tags: 
 *          - Customers
 *      produces:
 *        - application/json
 *      security:
 *       - UserSecurity: []
 *      parameters:
 *        - name: address_1
 *          in: formData
 *          description: Address 1
 *          required: true
 *          type: string
 *        - name: address_2
 *          in: formData
 *          description: Address 2
 *          type: string
 *        - name: city
 *          in: formData
 *          description: City
 *          required: true
 *          type: string
 *        - name: region
 *          in: formData
 *          description: Region
 *          required: true
 *          type: string
 *        - name: postal_code
 *          in: formData
 *          description: Postal Code
 *          required: true
 *          type: string
 *        - name: country
 *          in: formData
 *          description: Country
 *          required: true
 *          type: string
 *        - name: shipping_region_id 
 *          in: formData
 *          description: Shipping Region ID
 *          required: true
 *          type: integer
 *      responses:
 *       200:
 *         description: Return a Object of Customer with auth credencials
 *         schema:
 *           $ref: '#/definitions/Customer'
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
 * /customer/creditCard:
 *   put:
 *      summary: Update the credit card from customer
 *      tags: 
 *          - Customers
 *      produces:
 *        - application/json
 *      security:
 *       - UserSecurity: []
 *      parameters:
 *        - name: credit_card
 *          in: formData
 *          description: Credit Card
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
 *       401:
 *         description: Unauthorized
 *         schema:
 *           $ref: '#/definitions/Unauthorized'
 */
const express = require('express');
const router = express.Router();
const customerCtrl = require('../controllers/customerCtrl');
const authCtrl = require('../controllers/authController');

router.get('/', authCtrl, customerCtrl.getCustomerByID);
router.post('/login', customerCtrl.loginCtrl);
router.post('/', customerCtrl.registerCtrl);
router.put('/', authCtrl, customerCtrl.putCustomerCtrl);
router.put('/address', authCtrl, customerCtrl.putAddressCtrl);
router.put('/creditCard', authCtrl, customerCtrl.putCreditCard);
module.exports = router;