'use strict';
 
let express = require('express');
let bodyParser = require('body-parser');
let routerUsuarios = require('./routes/users');
let routerArticles = require('./routes/articles');

 
let application = express();
application.use(bodyParser.json()); 
application.use(routerUsuarios);
application.use(routerArticles);

 
module.exports = application;
 