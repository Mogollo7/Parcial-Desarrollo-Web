'use strict';
require('dotenv').config();
let jwt = require('jwt-simple');
let moment = require('moment');

let secret = process.env.JWT_SECRET;

function createToken(usuario) {
    let payload = {
        sub: usuario._id,
        email: usuario.email,
        role: usuario.role,
        iat: moment().unix(),
        exp: moment().add(process.env.TOKEN_EXPIRES_IN, 'seconds').unix()
    };
    return jwt.encode(payload, secret);
}

function validateToken(req, res, next) {
    
    if(!req.headers.authorization){
        return res.status(403).send({message: 'No se envió token'});
    }
    let token = req.headers.authorization.replace('Bearer ', '');
    let payload;

    try {
    payload = jwt.decode(token, secret);
} catch (err) {
    if (err.message === 'Token expired') {
        return res.status(401).send({ message: 'Token expirado' });
    }
    return res.status(401).send({ message: 'Token inválido' });
}
    req.usuario = payload;
    next();
}
module.exports = {createToken, validateToken};