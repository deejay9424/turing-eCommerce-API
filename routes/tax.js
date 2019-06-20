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
 *   - name: Tax
 *     description: "Everything about Tax"
 * /tax:
 *   get:
 *      summary: Get all taxes
 *      tags: 
 *          - Tax
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: A Array of Object Tax
 *         schema:
 *           type: object
 *           properties:
 *              tax_id:
 *                type: integer
 *                example: 1
 *              tax_type:
 *                type: string
 *                example: Sales Tax at 8.5%
 *              tax_percentage:
 *                type: integer
 *                example: 8.50
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /tax/{tax_id}:
 *   get:
 *      summary: Get tax by ID
 *      tags: 
 *          - Tax
 *      description: Return a tax by ID
 *      parameters:
 *          - name: tax_id
 *            in: path
 *            description: ID of tax
 *            required: true
 *            type: integer
 *            minimum: 1
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a object of tax.
 *         schema:
 *           type: object
 *           properties:
 *              tax_id:
 *                type: integer
 *                example: 1
 *              tax_type:
 *                type: string
 *                example: Sales tax
 *              tax_percentage:
 *                type: string
 *                example: 12% 
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
const express = require('express');
const router = express.Router();
const taxCtrl = require('../controllers/taxCtrl');

router.get('/', taxCtrl.getAllTax);
router.get('/:tax_id', taxCtrl.getSingleTax);

module.exports = router;
