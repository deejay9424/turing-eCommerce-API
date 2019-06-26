const conn = require('../config/sqlConfig');
const logger = require('../config/logger').Logger;
const VariableStore = require('../config/VariableStore.json');
const customerModel = require('../models/customerModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


module.exports = {
    getCustomerByID: function (req, res, next) {
        if (req.user) {
            let query = customerModel.customersSP.getCustomerByID + "(" + req.user.customer_id + ")";
            conn.query(query, function (err, result, fields) {
                if (err) {
                    logger.error("Error in get customer by ID controller : " + err);
                    res.status(VariableStore.Errors.customer.USR_00.status)
                        .send(VariableStore.Errors.customer.USR_00)
                }
                else {
                    res.status(200).send(result[0]);
                }
            })
        }
        else {
            res.status(VariableStore.Errors.Auth.AUT_02.status)
                .send(VariableStore.Errors.Auth.AUT_02)
        }
    },
    loginCtrl: function (req, res, next) {
        let email = req.body.email;
        let query = customerModel.customersSP.getLoginDetails + "('" + email + "')";
        conn.query(query, (err, data) => {
            if (err) {
                logger.error("Error in Login customer controller : " + err);
                res.status(VariableStore.Errors.customer.USR_00.status)
                    .send(VariableStore.Errors.customer.USR_00)
            }
            else {
                if (data[0].length > 0) {
                    bcrypt.compare(req.body.password, data[0][0].password, (err, result) => {
                        if (err) {
                            logger.error("Error in Login customer controller, Passwords don't match : " + err);
                            res.status(VariableStore.Errors.customer.USR_01.status)
                                .send(VariableStore.Errors.customer.USR_01)
                        }
                        else {
                            if (result) {
                                let token = jwt.sign({ email: email, customer_id: data[0][0].customer_id },
                                    process.env.jwtSecretKey,
                                    {
                                        expiresIn: '24h' // expires in 24 hours
                                    }
                                );
                                // return the JWT token for the future API calls
                                res.status(200).send({
                                    success: true,
                                    message: 'Authentication successful!',
                                    token: token
                                });
                            }
                            else {
                                logger.error("Error in Login customer controller : Email/password don't match");
                                res.status(VariableStore.Errors.customer.USR_01.status)
                                    .send(VariableStore.Errors.customer.USR_01)
                            }
                        }
                    })

                }
                else {
                    logger.error("Error in Login customer controller : " + err);
                    res.status(VariableStore.Errors.customer.USR_05.status)
                        .send(VariableStore.Errors.customer.USR_05)
                }
            }
        })
    },
    registerCtrl: function (req, res, next) {
        try {
            let hashedPassword = bcrypt.hashSync(req.body.password, 10);
            let e = validateEmail(req.body.email);
            let password = hashedPassword;
            let name = req.body.name;
            function validateEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }
            if (e) {
                let email = req.body.email;
                let registerQuery = customerModel.customersSP.registerCustomer + "('" + name + "','" + email + "','" + password + "')";
                let findEmailQuery = "SELECT * FROM customer where email = '" + email + "'";
                conn.query(findEmailQuery, function (err, findResult) {
                    if (err) {
                        logger.error("Error in register customer controller : " + err);
                        res.status(VariableStore.Errors.customer.USR_00.status)
                            .send(VariableStore.Errors.customer.USR_00)
                    }
                    else {
                        if (findResult.length > 0) {
                            logger.error("Error in register customer controller, email alredy exist : ");
                            res.status(VariableStore.Errors.customer.USR_04.status)
                                .send(VariableStore.Errors.customer.USR_04)
                        }
                        else {
                            conn.query(registerQuery, function (err, result, fields) {
                                if (err) {
                                    logger.error("Error in register customer controller : " + err);
                                    res.status(VariableStore.Errors.customer.USR_00.status)
                                        .send(VariableStore.Errors.customer.USR_00)
                                }
                                else {
                                    res.status(200).send(result[0])
                                }
                            })
                        }
                    }
                })
            }
            else {
                logger.error("Error in register customer controller : email id incorrect ");
                res.status(VariableStore.Errors.customer.USR_03.status)
                    .send(VariableStore.Errors.customer.USR_03)
            }

        }
        catch (exp) {
            logger.error("Error in register customer controller : " + exp);
            res.status(VariableStore.Errors.customer.USR_00.status)
                .send(VariableStore.Errors.customer.USR_00)

        }

    },
    putCustomerCtrl: function (req, res, next) {
        try {
            if (req.user) {
                let password = bcrypt.hashSync(req.body.password, 10);
                let customer_id = new Number(req.user.customer_id);
                let name = req.body.name, email = req.body.email;
                let day_phone = req.body.day_phone, eve_phone = req.body.eve_phone, mob_phone = req.body.mob_phone;
                const query = customerModel.customersSP.updateCustomer +
                    "(" + customer_id + ",'" + name + "','" + email + "','" + password + "','" + day_phone + "','" + eve_phone + "','" + mob_phone + "')";
                conn.query(query, (err, result) => {
                    if (err) {
                        logger.error("Error in update customer by ID controller : " + err);
                        res.status(VariableStore.Errors.customer.USR_00.status)
                            .send(VariableStore.Errors.customer.USR_00)
                    }
                    else {
                        res.status(200).send(result[0]);
                    }
                })

            }
            else {
                res.status(VariableStore.Errors.Auth.AUT_02.status)
                    .send(VariableStore.Errors.Auth.AUT_02)
            }
        }
        catch (ex) {
            logger.error("Error in update customer by ID controller : " + ex);
            res.status(VariableStore.Errors.customer.USR_00.status)
                .send(VariableStore.Errors.customer.USR_00)
        }
    },
    putAddressCtrl: function (req, res, next) {
        if (req.user) {
            let customer_id = new Number(req.user.customer_id);
            let address_1 = req.body.address_1, address_2 = req.body.address_2, city = req.body.city;
            let shipping_region_id = new Number(req.body.shipping_region_id);
            let region = req.body.region, postal_code = req.body.postal_code, country = req.body.country;
            const query = customerModel.customersSP.updateAddress +
                "(" + customer_id + ",'" + address_1 + "','" + address_2 + "','" + city + "','" + region + "','" + postal_code + "','" + country + "','" + shipping_region_id + "')";
            conn.query(query, (err, result) => {
                if (err) {
                    logger.error("Error in update Address by ID controller : " + err);
                    res.status(VariableStore.Errors.customer.USR_00.status)
                        .send(VariableStore.Errors.customer.USR_00)
                }
                else {
                    res.status(200).send(result[0]);
                }
            })

        }
        else {
            res.status(VariableStore.Errors.Auth.AUT_02.status)
                .send(VariableStore.Errors.Auth.AUT_02)
        }
    },
    putCreditCard: function (req, res, next) {
        if (req.user) {
            let customer_id = new Number(req.user.customer_id);
            let creditCard = req.body.credit_card;
            const query = customerModel.customersSP.updateCreditCard + "(" + customer_id + ",'" + creditCard + "')";
            conn.query(query, (err, result) => {
                if (err) {
                    logger.error("Error in update Credit Card by ID controller : " + err);
                    res.status(VariableStore.Errors.customer.USR_00.status)
                        .send(VariableStore.Errors.customer.USR_00)
                }
                else {
                    res.status(200).send(result[0]);
                }
            })

        }
        else {
            res.status(VariableStore.Errors.Auth.AUT_02.status)
                .send(VariableStore.Errors.Auth.AUT_02)
        }
    }
}