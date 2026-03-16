'use strict';

let express = require('express');
let router = express.Router();
let articleController = require('../controllers/articles');
let auth = require('../helpers/auth');
 
router.post('/api/article', auth.validateToken, articleController.crearArticle);
router.get('/api/articles', articleController.consultarTodos);
router.get('/api/article/:articleId', articleController.consultarPorId);
router.put('/api/article/:articleId', auth.validateToken, articleController.actualizarArticle);
router.delete('/api/article/:articleId', auth.validateToken, articleController.eliminarArticle);


module.exports = router;