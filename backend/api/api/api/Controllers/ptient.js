"use strict";

var Ptient = require("../models/Ptient");
var bcrypt = require("bcrypt-nodejs");

var path = require("path");
var fs = require("fs");
var mongoosePagination = require("mongoose-pagination");

function savePtient(req, res) {
  var ptient = new Ptient();
  var params = req.body;
  console.log(params);

  ptient.nombre = params.nombre;
  ptient.apellido = params.apellido;
  ptient.fecha = params.fecha;
  ptient.tipoConsulta= params.tipoConsulta;
  ptient.doctor = params.doctor;

  if (ptient.nombre != null && ptient.apellido != null && ptient.fecha != null) {
    ptient.save((err, ptientStored) => {
      if (err) {
        res.status(500).send({
          message: "Error al guardar el paciente"
        });
      } else {
        if (!ptientStored) {
          res.status(404).send({
            message: "No se ha guardado el paciente"
          });
        } else {
          res.status(200).send({
            user: ptientStored
          });
        }
      }
    });
  } else {
    res.status(200).send({
      message: "Faltan campos por llenar"
    });
  }
}


function gePtients(req, res){
  var page = req.params.page;
  var ptientPerPage = 5;
  Ptient.find().sort('name').paginate(page, ptientPerPage, (err, ptients, total) => {
      if (err) {
          res.status(500).send({
              message: "Error al solicitar lista de pacientes"
          });
      } else {
          if (!ptients) {
              res.status(404).send({
                  message: "No hay pacientes"
              });
          } else {
              res.status(200).send({
                  pages: total,
                  ptients: ptients
              });
          }  
      }
  });

}

function updatePtient(req, res){
  var ptientId = req.params.id;
  var update = req.body;

  Ptient.findByIdAndUpdate(ptientId, update, (err, ptientUpdated) => {
      if (err) {
          res.status(500).send({
              message: "Error al actualizar paciente"
          });
      } else {
          if (!ptientUpdated) {
              res.status(404).send({
                  message: "No se pudo actualizar paciente"
              });
          } else {
              res.status(200).send({
                  ptient: ptientUpdated
              });
          }
      }
  });
}

function deletePtient(req, res) {
  var ptientId = req.params.id;
  Ptient.findByIdAndRemove(ptientId, (err, ptientDeleted) => {
    if (err) {
      res.status(500).send({
        message: "Error al eliminar paciente"
      });
    } else {
      if (!ptientDeleted) {
        res.status(404).send({
          message: "El paciente no existe"
        });
      } 
        }
  });
}

module.exports = {
  savePtient,
  gePtients,
  deletePtient,
  updatePtient
};
