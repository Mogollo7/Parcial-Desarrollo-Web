'use strict';
 
require('dotenv').config();
let mongoose = require('mongoose');
let application = require('./application');
 
mongoose.connect(process.env.MONGO_URI).then(
    () => {
        console.log('Conexion exitosa corriento en el puerto ' + process.env.PORT);
        application.listen(process.env.PORT);
    },
    err => {
        console.error(err);
    }
);
 