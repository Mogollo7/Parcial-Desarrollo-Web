'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ArticleSchema = new Schema(
    {
        titulo : String,
        description : String,
        value : Number
    }
);

module.exports = mongoose.model('articles', ArticleSchema);