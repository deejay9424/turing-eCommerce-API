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
 *   - name: Shipping
 *     description: "Everything about Shipping"
 * /shipping/regions:
 *   get:
 *      summary: Get all taxes
 *      tags: 
 *          - Shipping
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a list of Shippings Regions
 *         schema:
 *           type: object
 *           properties:
 *              shipping_region_id:
 *                type: integer
 *                example: 1
 *              shipping_region:
 *                type: string
 *                example: Please select
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
/**
 * @swagger
 * /shipping/regions/{shipping_region_id}:
 *   get:
 *      summary: Get shipping region by ID
 *      tags: 
 *          - Shipping
 *      description: Return a shipping region by ID
 *      parameters:
 *          - name: shipping_region_id
 *            in: path
 *            description: Shipping Region Id
 *            required: true
 *            type: integer
 *            minimum: 1
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: Return a list of Object
 *         schema:
 *           type: object
 *           properties:
 *              shipping_id:
 *                type: integer
 *                example: 1
 *              shipping_type:
 *                type: string
 *                example: Next Day Delivery ($20)
 *              shipping_cost:
 *                type: string
 *                example: 20.00
 *              shipping_region_id:
 *                type: integer
 *                example: 2
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
const express = require('express');
const router = express.Router();
const shippingCtrl = require('../controllers/shippingCtrl');

router.get('/', shippingCtrl.getAllShippingRegions);
router.get('/:shipping_region_id', shippingCtrl.getSingleShippingRegion);

module.exports = router;
