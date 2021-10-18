const AuthController = require('./controllers/auth.controller');
const AuthMiddleware = require('./middlewares/auth.middleware');
const JWTMiddleware = require('./middlewares/jwt.middleware');
const UserController = require('./controllers/users.controller');

const routes = (app) => {
    app.post('/login', AuthMiddleware.verifyUserPassword, AuthController.generateJWT);
    app.get('/users/:id', JWTMiddleware.validateJWT, UserController.getUserById);
}

module.exports = {
    routes
}
