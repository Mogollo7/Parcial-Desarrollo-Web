'use strict';

let express = require('express');
let router = express.Router();
let articleController = require('../controllers/articles');
let auth = require('../helpers/auth');
 
router.post('/api/article', auth.validateToken, articleController.crearArticle);
router.get('/api/articles', articleController.consultarTodos);
router.get('/api/article/:articleId', articleController.consultarPorId);

module.exports = router;