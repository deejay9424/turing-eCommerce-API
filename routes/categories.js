/**
 * @swagger
 * definitions:
 *   Category:
 *     properties:
 *       category_id:
 *         type: integer
 *         example: 1
 *       name:
 *         type: string
 *         example: French
 *       description:
 *         type: string
 *         example: The French have always had an eye for beauty. One look at the T-shirts below and you'll see that same appreciation has been applied abundantly to their postage stamps. Below are some of our most beautiful and colorful T-shirts, so browse away! And don't forget to go all the way to the bottom - you don't want to miss any of them!
 *       department_id:
 *          type: integer
 *          example: 1
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
 *   - name: Categories
 *     description: "Everything about categories"
 * /categories:
 *   get:
 *      summary: Get Categories
 *      tags: 
 *          - Categories
 *      description: Return a list of categories
 *      parameters:
 *        - name: order
 *          in: query
 *          description: "Sorting a field. Allowed fields: 'category_id', 'name'."
 *          required: false
 *          type: string
 *        - name: page
 *          in: query
 *          description: "Inform the page. Starting with 1. Default: 1"
 *          required: false
 *          type: integer
 *        - name: limit
 *          in: query
 *          description: "Limit per page, Default: 20."
 *          required: false
 *          type: integer
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a list with count (total categories) and the rows of Categories
 *         schema:
 *           $ref: '#/definitions/Category'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /categories/{category_id}:
 *   get:
 *      summary: Get Category by ID
 *      tags: 
 *          - Categories
 *      description: Return a Category by ID
 *      parameters:
 *          - name: category_id
 *            in: path
 *            description: ID of category
 *            required: true
 *            type: number
 *            minimum: 1
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a object of Category
 *         schema:
 *           $ref: '#/definitions/Category'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /categories/inProduct/{product_id}:
 *   get:
 *      summary: Get Categories of a product
 *      tags: 
 *          - Categories
 *      description: Return a list of categories from a Product ID
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
 *         description: Return a array of Category Objects
 *         schema:
 *           $ref: '#/definitions/Category'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /categories/inDepartment/{department_id}:
 *   get:
 *      summary: Get Categories of a Department
 *      tags: 
 *          - Categories
 *      description: Return a list of categories from a Department ID
 *      parameters:
 *          - name: department_id
 *            in: path
 *            description: ID of Department
 *            required: true
 *            type: integer
 *            minimum: 1
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a array of Object Category
 *         schema:
 *           $ref: '#/definitions/Category'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
const express = require('express');
const router = express.Router();
const categoryCtrl = require('../controllers/categoryCtrl');

router.get('/', categoryCtrl.getAllCategory);
router.get('/:category_id', categoryCtrl.getSingleCategory);
router.get('/inProduct/:product_id', categoryCtrl.getProductCategory);
router.get('/inDepartment/:department_id', categoryCtrl.getDepartmentCategories);

module.exports = router;