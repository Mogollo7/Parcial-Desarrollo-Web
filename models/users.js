'use strict'

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UsuarioSchema = Schema({
    email: String,
    password: String, 
    role: {
        type: String,
        enum: ["admin", "standard"],
        default: "standard" 
    }
});

module.exports = mongoose.model("users", UsuarioSchema)