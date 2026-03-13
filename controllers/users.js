'use strict';

let Usuario = require('../models/users');
let auth = require('../helpers/auth');
let bcrypt = require('bcryptjs');
 
function registrar(req, res){
    let email = req.body.email;
    let password = req.body.password;
    let role = req.body.role;

    if(!email || !password){
        return res.status(400).send({ message: 'Debe enviar email y password' });
    }
    let usuario = new Usuario({
        email: email,
        password: bcrypt.hashSync(password, 10),
        role: role
    });
    usuario.save().then(
        (usuario) => {
            res.status(200).send({ usuario: usuario});
        }
    ).catch(
        (err) => {
            res.status(500).send({ message: 'Error al registrar el usuario' });
        }
    );
}
 
function login(req, res){
    let emailParametro = req.body.email;
    let passwordParametro = req.body.password;
    if(!emailParametro || !passwordParametro){
        return res.status(400).send({ message: 'Debe enviar email y password' });
    }
    Usuario.findOne({ email: emailParametro }).then(
        (usuario) => {
            if(!usuario){
                return res.status(404).send({ message: 'No existe el usuario' });
            }
            if(!bcrypt.compareSync(passwordParametro, usuario.password)){
                return res.status(401).send({ message: 'Contraseña incorrecta' });
            }
            res.status(200).send({
                message: 'Te has logueado correctamente',
                email: usuario.email,
                role: usuario.role,
                token: auth.createToken(usuario) 
            });
        }
    ).catch(
        (err) => {
            res.status(500).send({ message: 'Error al realizar el login' });
        }
    );
}

module.exports = { registrar, login };