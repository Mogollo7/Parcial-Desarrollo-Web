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
        exp: moment().add(15, 'minutes').unix()
    };
    return jwt.encode(payload, secret);
}

function validateToken(req, res, next) {
    
    if(!req.headers.authorization){
        return res.status(403).send({message: 'No se envió token'});
    }

    try {

        let token = req.headers.authorization.replace('Bearer ', '');
        let payload = jwt.decode(token, secret);

        if(payload.exp <= moment().unix()){
            return res.status(401).send({message: 'Token expirado'});
        }

        req.user = payload;
        next();

    } catch(ex) {
        return res.status(401).send({message: 'Token no válido'});
    }

}
module.exports = {createToken, validateToken};