const User = require('../mock/user.data');

const getUserCredentialsByEmail = (email) => {
    const user = User.filter(user => user.email === email);
    // if(user.length === 0) {
    //     throw new Error('Error while Reading User email');
    // }
    return user[0];
}

const listById = (id) => {
    const user = User.filter(user => user.id === id);
    // if(user.length === 0) {
    //     throw new Error('Error while Reading User email');
    // }
    return user[0];
}

module.exports = {
    getUserCredentialsByEmail,
    listById
}