'use strict';

let Article = require('../models/articles');

function crearArticle(req, resp){

if(!req.user || req.user.role !== 'admin'){
    return resp.status(403).send({
        message:'Solo los administradores pueden crear artículos'
    });
}
    let requestBody = req.body;

    if(!requestBody){
        resp.status(400).send({'message': 'cuerpo de la solicitud vacio'});
    }
    else if(!requestBody.titulo || !requestBody.value || !requestBody.description){
        resp.status(400).send({'message': 'campos obligatorios faltantes'});
    }
    else if(requestBody.titulo.trim() === '' || requestBody.value <= 0 || requestBody.description.trim() === ''){
        resp.status(400).send({'message': 'valores inválidos en campos obligatorios'});
    }
    else{
        let nuevoArticle = new Article();
        nuevoArticle.titulo= requestBody.titulo;
        nuevoArticle.description = requestBody.description;
        nuevoArticle.value = requestBody.value;

        nuevoArticle.save().then(
            (articleCreado) => {
                resp.status(201).send({'message': 'articulo creado', 'article': articleCreado});
            },
            err => {
                resp.status(500).send({'message':'internal error', 'error': err})
            }
        );
    }
}
function consultarTodos(req, resp){
    Article.find({ }).then(
        (Article) => {
            resp.status(200).send(Article);
        }
    ).catch(
        (err) => {
            resp.status(500).send({ message: 'Error al consultar artículos' });
        }
    );
}
function consultarPorId(req, resp){
    let articleId = req.params.articleId;
    Article.findById(articleId).then(
        (article) => {
            resp.status(200).send(article);
        }
    ).catch(
        (err) => {
            resp.status(500).send({ message: 'Error al consultar artículo' });
        }
    );
}
module.exports =  { crearArticle, consultarTodos, consultarPorId };
