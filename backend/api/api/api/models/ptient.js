"use strict";

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var PtientSchema = schema({
  nombre: String,
  apellido: String,
  fecha: String,
  tipoConsulta: String,
  doctor: String,
});



module.exports = mongoose.model("Ptient", PtientSchema);
