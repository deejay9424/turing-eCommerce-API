const mysql = require('mysql');
const chalk = require('chalk');
const logger = require('../config/logger').Logger;
const VariableStore = require("../config/VariableStore");

var con = mysql.createConnection({
    host: "sql3.freesqldatabase.com",
    user: "sql3295598",
    password: "2WE6Biqtbb",
    database: "sql3295598"
});

con.connect(function (err) {
    if (err){
        logger.error("Error in SQL Database connection : "+err)
        console.log(chalk.red("Error Connecting to Database"))
        return new Error(VariableStore.Errors.databaseError)
    }
    console.log(chalk.green("Database Connected!"));
});
con.on('error', console.error.bind(chalk.yellow('connection error...')));
module.exports = con;