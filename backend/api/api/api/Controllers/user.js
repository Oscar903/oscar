"use strict";

var bcrypt = require("bcrypt-nodejs");
var User = require("../models/user");
var jwt = require("../services/jwt");
var path = require("path");
var fs = require("fs");


function saveUser(req, res) {
  var user = new User();
  var params = req.body;

  console.log(params);

  user.nombre = params.nombre;
  user.apellido = params.apellido;
  user.cargo = params.cargo;
  user.correo= params.correo;
  user.password= params.password;
  if (params.password) {
    bcrypt.hash(params.password, null, null, function (err, hash) {
        if (user.nombre != null && user.apellido != null && user.correo != null) {
            user.save((err, userStored) => {
                if (err) {
                    res.status(500).send({
                        message: 'Error al guardar el usuario'
                    });
                } else {
                    if (!userStored) {
                        res.status(404).send({
                            message: 'No se ha guardado el usuariol'
                        });
                    } else {
                        res.status(200).send({
                            user: userStored
                        });
                    }

                }
            });
        } else {
            res.status(200).send({
                message: 'Faltan campos por llenar'
            });
        }

    });
} else {
    res.status(500).send({
        message: 'Introduce la contraseña'
    });
}


};

  /*if (user.nombre != null && user.apellido != null) {
    user.save((err, userStored) => {
      if (err) {
        res.status(500).send({
          message: "Error al guardar usuario"
        });
      } else {
        if (!userStored) {
          res.status(404).send({
            message: "No se ha guardado el usuario"
          });
        } else {
          res.status(200).send({
            user: userStored
          });
        }
      }
    });
  } else {
    res.status(200).send({
      message: "Faltan campos por llenar"
    });
  }
}*/

function loginUser(req, res) {
  var params = req.body;

  var correo = params.correo;
  var password = params.password;

  User.findOne({
      correo: correo.toLowerCase()
  },
      (err, userFound) => {
          if (err) {
              res.status(500).send({
                  message: "Error en la peticion"
              });
          } else {
              if (!userFound) {
                  res.status(404).send({
                      message: "El usuario no existe"
                  });
              } else {
                  bcrypt.compare(password, userFound.password, function (err, check) {
                      if (check) {
                          if (params.gethash) {
                              res.status(200).send({
                                 token: jwt.createToken(userFound)
                              });

                          } else {
                              res.status(200).send({
                                  userFound
                              });
                          }
                      } else {
                          res.status(404).send({
                              message: "Error al iniciar sesion"
                          });
                      }
                  });
              }
          }

      });
}


module.exports = {
  saveUser,
  loginUser
 
};
