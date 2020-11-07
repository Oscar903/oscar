'use strict'

var mongoose =require('mongoose');
var schema = mongoose.Schema;

var UserSchema = schema({
    nombre: String,
    apellido: String,
    correo: String,
    cargo: String,
    password: String
});

module.exports = mongoose.model("User", UserSchema);
