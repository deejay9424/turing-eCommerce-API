const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./config/swaggerConfig');
const app = express();
//=========================================================== Routes ========================================
const departmentRouter = require('./routes/departments');
//=========================================================== Middlewares =================================================================
const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(compression());
app.use(helmet());
//============================================================= Routes ===================================================================
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/departments',departmentRouter);
//========================================================== Catch 404 and forward to error handler ======================================
app.use(function (req, res, next) {
    next(createError(500));
});
//========================================================== Error handler ================================================================
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'DEV' ? err : {};
    // render the error page
    res.status(500);
    res.send({ message: err.message })
});

module.exports = app;