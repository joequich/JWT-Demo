const { request, response } = require('express');
const { getUserCredentialsByEmail } = require('../services/users.service');

const verifyUserPassword = (req = request, res = response, next) => {
    const user = getUserCredentialsByEmail(req.body.email);
    if (user) {
        const passHash = user.password;
        if (compareSync(req.body.password, passHash)) {
            req.body = {
                userId: user.id,
                email: user.email,
            };
            return next();
        }
    }
    return res
        .status(400)
        .json({
            status: 400,
            message: 'Invalid email and/or password'
        });
}

module.exports = {
    verifyUserPassword
}


