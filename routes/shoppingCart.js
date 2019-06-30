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
/**
 * @swagger
 * /shoppingcart/cart/{cart_id}:
 *   get:
 *      summary: Get List of Products in Shopping Cart
 *      tags: 
 *          - Shopping Cart
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: cart_id 
 *          in: path
 *          description: Cart ID
 *          required: true
 *          type: string
 *      responses:
 *       200:
 *         description: Return a array of products in the cart.
 *         schema:
 *           $ref: '#/definitions/CartWithProduct'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /shoppingcart/update/{item_id}:
 *   put:
 *      summary: Update the cart by item
 *      tags: 
 *          - Shopping Cart
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: item_id 
 *          in: path
 *          description: Item ID
 *          required: true
 *          type: integer
 *        - name: quantity  
 *          in: formData
 *          description: Item Quantity
 *          required: true
 *          type: integer
 *      responses:
 *       200:
 *         description: Return a array of products in the cart.
 *         schema:
 *           $ref: '#/definitions/CartWithProduct'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /shoppingcart/empty/{cart_id}:
 *   delete:
 *      summary: Empty Cart
 *      tags: 
 *          - Shopping Cart
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: cart_id 
 *          in: path
 *          description: Cart ID
 *          required: true
 *          type: string
 *      responses:
 *       200:
 *         description: Return a array of products in the cart.
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /shoppingcart/moveToCart/{item_id}:
 *   get:
 *      summary: Move a product Cart
 *      tags: 
 *          - Shopping Cart
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: item_id 
 *          in: path
 *          description: Item ID
 *          required: true
 *          type: integer
 *      responses:
 *       200:
 *         description: No data.
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /shoppingcart/totalAmount/{cart_id}:
 *   get:
 *      summary: Return total amount from Cart
 *      tags: 
 *          - Shopping Cart
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: cart_id 
 *          in: path
 *          description: Cart ID
 *          required: true
 *          type: string
 *      responses:
 *       200:
 *         description: Return the total amount
 *         schema:
 *              type: object
 *              properties:
 *                  total_amount:
 *                      type: integer
 *                      example: 11.99
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /shoppingcart/saveForLater/{item_id}:
 *   get:
 *      summary: Save a Product for later
 *      tags: 
 *          - Shopping Cart
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: item_id 
 *          in: path
 *          description: Item ID
 *          required: true
 *          type: integer
 *      responses:
 *       200:
 *         description: No data.
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /shoppingcart/getSaved/{cart_id}:
 *   get:
 *      summary: get saved for later products
 *      tags: 
 *          - Shopping Cart
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: cart_id 
 *          in: path
 *          description: Cart ID
 *          required: true
 *          type: string
 *      responses:
 *       200:
 *         description: Return a object of item salved.
 *         schema:
 *            type: object
 *            properties:
 *              item_id:
 *                 type: integer
 *                 example: 1
 *              name:
 *                 type: string
 *                 example: T-shirt
 *              attributes:
 *                 type: string
 *                 example: LG, red
 *              price:
 *                 type: string
 *                 example: 15.90
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /shoppingcart/removeProduct/{item_id}:
 *   delete:
 *      summary: Remove a product in the cart
 *      tags: 
 *          - Shopping Cart
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: item_id 
 *          in: path
 *          description: Item ID
 *          required: true
 *          type: integer
 *      responses:
 *       200:
 *         description: No data.
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
router.get('/cart/:id', shoppingcartCtrl.getProducts);
router.put('/update/:id', shoppingcartCtrl.updateCart);
router.delete('/empty/:id', shoppingcartCtrl.emptyCart);
router.get('/moveToCart/:id', shoppingcartCtrl.moveToCart);
router.get('/totalAmount/:id', shoppingcartCtrl.totalAmount);
router.get('/saveForLater/:id', shoppingcartCtrl.saveForLater);
router.get('/getSaved/:id', shoppingcartCtrl.getSaved);
router.delete('/removeProduct/:id', shoppingcartCtrl.removeProduct);

module.exports = router;
