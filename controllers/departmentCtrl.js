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
    },
    getSingleDepartment: function (req, res, next) {
        try {
            var department_id = new Number(req.params.department_id)
            if (department_id == NaN) {
                logger.error("Error in get one department controller : " + err);
                res.status(VariableStore.Errors.department.DEP_01.status)
                    .send(VariableStore.Errors.department.DEP_01)
            }
        }
        catch (ex) {
            logger.error("Error in get one department controller : " + err);
            res.status(VariableStore.Errors.department.DEP_01.status)
                .send(VariableStore.Errors.department.DEP_01)
        }
        conn.query(departmentModel.departmentsSP.getSingleDepartment + "(" + department_id + ")",
            function (err, result, fields) {
                if (err) {
                    logger.error("Error in get one department controller : " + err);
                    res.status(VariableStore.Errors.department.DEP_00.status)
                        .send(VariableStore.Errors.department.DEP_00)
                }
                else {
                    if (result[0].length > 0) {
                        res.status(200).send(result[0])
                    }
                    else {
                        res.status(VariableStore.Errors.department.DEP_02.status)
                            .send(VariableStore.Errors.department.DEP_02)
                    }
                }
            })
    }
}