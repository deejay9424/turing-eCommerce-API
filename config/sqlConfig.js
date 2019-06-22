const mysql = require('mysql');
const chalk = require('chalk');
const logger = require('../config/logger').Logger;
require('dotenv').config();
const VariableStore = require("../config/VariableStore");

var con = mysql.createConnection({
    host: process.env.DatabaseHostname,
    user: process.env.DatabaseUsername,
    password: process.env.DatabasePassword,
    database: process.env.DatabaseName
});

con.connect(function (err) {
    if (err) {
        logger.error("Error in SQL Database connection : " + err)
        console.log(chalk.red("Error Connecting to Database"))
        return new Error(VariableStore.Errors.databaseError)
    }
    console.log(chalk.green("Database Connected!"));
});
con.on('error', function (err) {
    logger.error("Error in DB connection : " + err)
    console.error.bind(chalk.yellow('connection error...'))
});
module.exports = con;