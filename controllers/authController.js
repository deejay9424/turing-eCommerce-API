const VariableStore = require('../config/VariableStore.json')
const logger = require('../config/logger').Logger;
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    try {
        //Request header with authorization key
        const bearerHeader = req.headers['user-key'];

        //Check if there is  a header
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');

            //Get Token arrray by spliting
            const bearerToken = bearer[0];

            jwt.verify(bearerToken, process.env.jwtSecretKey, (err, authData) => {
                if (err) {
                    logger.error("Error unauthorized : " + err)
                    res.status(VariableStore.Errors.Auth.AUT_02.status)
                        .send(VariableStore.Errors.Auth.AUT_02);
                } else {
                    req.user = {
                        customer_id: authData.customer_id,
                        email: authData.email
                    }
                    return next();
                }
            });
        }
        else {
            logger.error("Invalid/missing Auth token")
            res.status(VariableStore.Errors.Auth.AUT_01.status)
                .send(VariableStore.Errors.Auth.AUT_01);
        }
    }
    catch (ex) {
        logger.error("Error in auth middleware : " + ex);
        return next(new Error('error'));
    }

}

module.exports = verifyToken;