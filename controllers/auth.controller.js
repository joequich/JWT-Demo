const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const { generateSalt, hashSync } = require('../helpers/bcrypt.helper');


const generateJWT = (req = request, res = response) => {
    try {
        const body = {
            userId: req.body.userId,
            email: req.body.email,
        }

        const refreshId = body.userId + process.env.JWT_SECRETKEY;
        const salt = generateSalt();
        const payload = {
            ...body, refreshKey: salt
        }
        const hash = hashSync(refreshId, salt);
        const token = jwt.sign(payload, process.env.JWT_SECRETKEY, { expiresIn: '4h' });

        return res.status(201).json({ accessToken: token, refreshToken: hash });
    } catch (err) {
        if (err instanceof Error) {
            return res.status(500).json({ status: 500, message: err.message });
        } else {
            return res.status(500).json({ status: 500, message: 'Unknow failure' });
        }
    }
}


module.exports = {
    generateJWT
}