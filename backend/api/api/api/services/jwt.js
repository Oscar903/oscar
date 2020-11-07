'use strict'

var jwt = require('jwt-simple');

var moment = require('moment');
var secret = 'passwordSecret';

exports.createToken = function (user) {
    var payload = {
        sub: user.id,
        nombre: user._nombre,
        apellido: user.apellido,
        correo: user.correo,
        cargo: user.cargo,
        iat: moment().unix(),
        exp: moment().add(5,'days').unix 
    };

    return jwt.encode(payload, secret)
};