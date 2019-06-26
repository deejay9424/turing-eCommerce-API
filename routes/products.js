/**
 * @swagger
 * definitions:
 *   Product:
 *     properties:
 *       product_id:
 *         type: integer
 *         example: 2
 *       name:
 *         type: string
 *         example: Charles Cathedral
 *       description:
 *         type: string
 *         example: "The Fur Merchants. Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!"
 *       price:
 *         type: string
 *         example: 16.95
 *       discounted_price:
 *         type: string
 *         example: 15.95
 *       thumbnail:
 *         type: string
 *         example: chartres-cathedral-thumbnail.gif
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
 * tags:
 *   - name: Products
 *     description: "Everything about Products"
 * /products:
 *   get:
 *      summary: Get Products
 *      tags: 
 *          - Products
 *      description: Return a list of products
 *      parameters:
 *          - name: page
 *            in: query
 *            description: "Inform the page. Starting with 1. Default: 1"
 *            type: integer
 *          - name: limit
 *            in: query
 *            description: "Limit per page, Default: 20."
 *            type: integer
 *          - name: description_length
 *            in: query
 *            description: "Limit of the desc, Default: 200."
 *            type: integer
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return the total of products and a list of Products in row.
 *         schema:
 *           $ref: '#/definitions/Product'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /products/search:
 *   get:
 *      summary: Search Products
 *      tags: 
 *          - Products
 *      parameters:
 *          - name: query_string
 *            in: query
 *            description: Query to search
 *            required: true
 *            type: string
 *          - name: all_words
 *            in: query
 *            enum: [ "on", "off"]
 *            description: "All words or no. Default: on"
 *            type: string
 *          - name: page
 *            in: query
 *            description: "Inform the page. Starting with 1. Default: 1"
 *            type: integer
 *          - name: limit
 *            in: query
 *            description: "Limit per page, Default: 20."
 *            type: integer
 *          - name: description_length
 *            in: query
 *            description: "Limit of the desc, Default: 200."
 *            type: integer
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return the total of products and a list of products.
 *         schema:
 *           $ref: '#/definitions/Product'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /products/{product_id}:
 *   get:
 *      summary: Get Product by ID
 *      tags: 
 *          - Products
 *      parameters:
 *          - name: product_id
 *            in: path
 *            description: ID of product
 *            required: true
 *            type: integer
 *            minimum: 1
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a Product Object
 *         schema:
 *           $ref: '#/definitions/Product'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /products/inCategory/{category_id}:
 *   get:
 *      summary: Get a lit of Products of Categories
 *      tags: 
 *          - Products
 *      parameters:
 *          - name: category_id
 *            in: path
 *            description: Category ID
 *            required: true
 *            type: integer
 *          - name: page
 *            in: query
 *            description: "Inform the page. Starting with 1. Default: 1"
 *            type: integer
 *          - name: limit
 *            in: query
 *            description: "Limit per page, Default: 20."
 *            type: integer
 *          - name: description_length
 *            in: query
 *            description: "Limit of the desc, Default: 200."
 *            type: integer
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a list of Product Objects.
 *         schema:
 *           $ref: '#/definitions/Product'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /products/inDepartment/{department_id}:
 *   get:
 *      summary: Get a list of Products on Department
 *      tags: 
 *          - Products
 *      parameters:
 *          - name: department_id
 *            in: path
 *            description: Department ID
 *            required: true
 *            type: integer
 *          - name: page
 *            in: query
 *            description: "Inform the page. Starting with 1. Default: 1"
 *            type: integer
 *          - name: limit
 *            in: query
 *            description: "Limit per page, Default: 20."
 *            type: integer
 *          - name: description_length
 *            in: query
 *            description: "Limit of the desc, Default: 200."
 *            type: integer
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return the total and a list of products
 *         schema:
 *           $ref: '#/definitions/Product'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /products/{product_id}/details:
 *   get:
 *      summary: Get details of a Product
 *      tags: 
 *          - Products
 *      parameters:
 *          - name: product_id
 *            in: path
 *            description: ID of product
 *            required: true
 *            type: integer
 *            minimum: 1
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a Object of Products
 *         schema:
 *           $ref: '#/definitions/Product'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /products/{product_id}/locations:
 *   get:
 *      tags: 
 *          - Products
 *      parameters:
 *          - name: product_id
 *            in: path
 *            description: ID of product
 *            required: true
 *            type: integer
 *            minimum: 1
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return locations of products.
 *         schema:
 *           $ref: '#/definitions/Product'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /products/{product_id}/reviews:
 *   get:
 *      tags: 
 *          - Products
 *      parameters:
 *          - name: product_id
 *            in: path
 *            description: ID of product
 *            required: true
 *            type: integer
 *            minimum: 1
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a list of reviews
 *         schema:
 *           $ref: '#/definitions/Product'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /products/{product_id}/review:
 *   post:
 *     tags:
 *       - Products
 *     description: Write review for a product
 *     produces:
 *       - application/json
 *     security:
 *       - UserSecurity: []
 *     parameters:
 *       - name: product_id
 *         type: integer
 *         description: Product ID
 *         in: path
 *         required: true
 *       - name: review
 *         type: string
 *         description: Review Text of Product
 *         in: formData
 *         required: true
 *       - name: rating 
 *         type: integer
 *         description: Rating of Product
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: No data.
 *       400:
 *         description: Return a error object
 *         schema:
 *           $ref: '#/definitions/Error'
 *       401:
 *         description: Return a error object
 *         schema:
 *           $ref: '#/definitions/Unauthorized'
 */
const express = require('express');
const router = express.Router();
const productsCtrl = require('../controllers/productsCtrl');
const authCtrl = require('../controllers/authController');

router.get('/', productsCtrl.getAllProducts);
router.get('/search', productsCtrl.searchProducts);
router.get('/:product_id', productsCtrl.getProductByID);
router.get('/inCategory/:category_id', productsCtrl.getProductByCategory);
router.get('/inDepartment/:department_id', productsCtrl.getProductByDepartment);
router.get('/:product_id/details', productsCtrl.getProductDetails);
router.get('/:product_id/locations', productsCtrl.getProductLocations);
router.get('/:product_id/reviews', productsCtrl.getProductReviews);
router.post('/:product_id/review', authCtrl, productsCtrl.postProductReviews);

module.exports = router;
