const conn = require('../config/sqlConfig');
const logger = require('../config/logger').Logger;
const VariableStore = require('../config/VariableStore.json');
const departmentModel = require('../models/departmentModel');

module.exports = {
    getAllDepartments: function (req, res, next) {
        conn.query(departmentModel.departmentsSP.getAllDepartments, function (err, result, fields) {
            if (err) {
                logger.error("Error in get all departments controller : " + err);
                res.status(VariableStore.Errors.department.DEP_00.status)
                .send(VariableStore.Errors.department.DEP_00)
            }
            else {
                res.status(200).send(result[0])
            }
        })

    }
}