const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req = request, res = response, next) => {
    if (req.headers['authorization']) {
        try {
            const authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).json({ status: 401 });
            } else {
                res.locals.jwt = jwt.verify(
                    authorization[1],
                    process.env.JWT_SECRETKEY
                )
                return next();
            }
        } catch (error) {
            return res.status(403).json({ status: 403, message: 'Invalid Token' });
        }
    } else {
        return res
            .status(401)
            .json({
                status: 401,
                message: 'No token was found in request'
            });
    }
}

module.exports = {
    validateJWT
}