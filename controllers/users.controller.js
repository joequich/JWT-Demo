const { request, response } = require("express");
const User = require("../services/users.service");

const getUserById = (req = request, res = response) => {
    const user = User.listById(req.params.id);

    if (user) {
        return res
            .status(200)
            .json({
                status: 200,
                user,
                message: 'Succesfully Users List',
            });
    } else {
        return res
            .status(400)
            .json({ status: 400, message: 'User not found' });
    }
}

module.exports = {
    getUserById
}