'use strict';

let Article = require('../models/articles');

function crearArticle(req, resp){

if(!req.usuario || req.usuario.role !== 'admin'){
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
function actualizarArticle(req, resp){
    if(!req.usuario || req.usuario.role !== 'admin'){
    return resp.status(403).send({
        message:'Solo los administradores pueden editar artículos'
    });
}
    let articleId = req.params.articleId;
    let datosActualizados = req.body;

    Article.findByIdAndUpdate(articleId, datosActualizados, {returnDocument: 'after'}).then(
        (articleActualizado) => {
            if(!articleActualizado){
                return resp.status(404).send({
                    message: 'Artículo no encontrado'
                });
            }
            resp.status(200).send( { message: 'Artículo actualizado' });
        }
    ).catch(
        (err) => {
            resp.status(500).send({ message: 'Error al actualizar el artículo', error: err });
        }
    );
}
function eliminarArticle(req, resp){
        if(!req.usuario || req.usuario.role !== 'admin'){
    return resp.status(403).send({
        message:'Solo los administradores pueden eliminar artículos'
    });
}
    let articleId = req.params.articleId;
    Article.findByIdAndDelete(articleId).then(
        (articleEliminado) => {
            if(!articleEliminado){
                return resp.status(404).send({
                    message: 'Artículo no encontrado'
                });
            }
            resp.status(200).send({ message: 'Artículo eliminado', article: articleEliminado });
        }
    ).catch(
        (err) => {
            resp.status(500).send({ message: 'Error al eliminar el artículo', error: err });
        }
    );
}

function consultarTodos(req, resp){
    Article.find({ }).then(
        (articles) => {
            resp.status(200).send(articles);
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
            if(!article){
                return resp.status(404).send({ message: 'Artículo no encontrado' });
            }
            resp.status(200).send(article);
        }
    ).catch(
        (err) => {
            resp.status(500).send({ message: 'Error al consultar artículo', error: err });
        }
    );
}
module.exports =  { crearArticle, actualizarArticle, eliminarArticle, consultarTodos, consultarPorId };
