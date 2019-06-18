/**
 * @swagger
 * definitions:
 *   Attribute:
 *     properties:
 *       attribute_id:
 *         type: integer
 *         example: 1
 *       name:
 *         type: string
 *         example: Size
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
 *   - name: Attribute
 *     description: "Everything about Attributes"
 * /attributes:
 *   get:
 *      summary: Get Attribute List
 *      tags: 
 *          - Attribute
 *      description: Return a list of attributes
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: List of Attribute Objects
 *         schema:
 *           $ref: '#/definitions/Attribute'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /attributes/{attribute_id}:
 *   get:
 *      summary: Get Attribute by ID
 *      tags: 
 *          - Attribute
 *      description: Return a Attribute by ID
 *      parameters:
 *          - name: attribute_id
 *            in: path
 *            description: Attribute ID
 *            required: true
 *            type: integer
 *            minimum: 1
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a Object of Attribute
 *         schema:
 *           $ref: '#/definitions/Attribute'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /attributes/values/{attribute_id}:
 *   get:
 *      summary: Get Values Attribute from Attribute
 *      tags: 
 *          - Attribute
 *      description: Return a list of attribute values of a attribute
 *      parameters:
 *          - name: attribute_id
 *            in: path
 *            description: Attribute ID
 *            required: true
 *            type: integer
 *            minimum: 1
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a list of Attribute Values
 *         schema:
 *              type: object
 *              properties:
 *                  attribute_value_id:
 *                      type: integer
 *                      example: 1
 *                  value:
 *                      type: string
 *                      example: S
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /attributes/inProduct/{product_id}:
 *   get:
 *      summary: Get All Attributes with product ID
 *      tags: 
 *          - Attribute
 *      description: Return a list of Attributes from a product ID
 *      parameters:
 *          - name: product_id
 *            in: path
 *            description: ID of Product
 *            required: true
 *            type: integer
 *            minimum: 1
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a array of Values of Attribute Objects
 *         schema:
 *              type: object
 *              properties:
 *                attribute_name:
 *                  type: string
 *                  example: color
 *                attribute_value_id:
 *                  type: integer
 *                  example: 1
 *                attribute_value:
 *                  type: string
 *                  example: white
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
const express = require('express');
const router = express.Router();
const attributeCtrl = require('../controllers/attributesCtrl');

router.get('/', attributeCtrl.getAllAttributes);
router.get('/:attribute_id', attributeCtrl.getSingleAttribute);
router.get('/values/:attribute_id', attributeCtrl.getValuesAttribute);
router.get('/inProduct/:product_id', attributeCtrl.getAllAttributesWithProductID);

module.exports = router;