const bcrypt = require('bcrypt');

const hashSync = (password, salt) => {
    return bcrypt.hashSync(password, salt);
};

const generateSalt = (rounds = 10, minor = 'b') => {
    return bcrypt.genSaltSync(rounds, minor);
};

const compareSync = (plaintTextPassword, hash) => {
    // return bcrypt.compareSync(plaintTextPassword, hash);
    return plaintTextPassword === hash;
};

module.exports = {
    hashSync,
    generateSalt,
    compareSync
}

   
