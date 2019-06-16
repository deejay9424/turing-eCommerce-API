/**
 * @swagger
 * definitions:
 *   Department:
 *     properties:
 *       department_id:
 *         type: integer
 *         example: 1
 *       name:
 *         type: string
 *         example: Regional
 *       description:
 *         type: string
 *         example: Proud of your country? Wear a T-shirt with a national symbol stamp!
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
 *   - name: Departments
 *     description: "Everything about department"
 * /departments:
 *   get:
 *      tags: 
 *          - Departments
 *      description: Return a list of department
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: An Array of Object Department
 *         schema:
 *           $ref: '#/definitions/Department'
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 */
const express = require('express');
const router = express.Router();
const departmentCtrl = require('../controllers/departmentCtrl');

router.get('/', departmentCtrl.getAllDepartments);

module.exports = router;
