'use strict';

let jwt = require('jwt-simple');
let moment = require('moment');

let secret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik,.,qw';

function createToken(usuario) {
    let payload = {
        sub: usuario._id,
        email: usuario.email,
        role: usuario.role,
        iat: moment().unix(),
        exp: moment().add(5, 'minutes').unix()
    };
    return jwt.encode(payload, secret);
}

function validateToken(req, res, next) {
    try {
        let token = req.headers.authorization.replace(' Bearer ', '');
        let payload = jwt.decode(token, secret);
        req.user = payload;
        next();
    }catch(ex) {
        res.status(401).send({message: 'Token no válido'}); }

    };
module.exports = {createToken, validateToken};