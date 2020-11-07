"use strict";

var express = require("express");
var ptientController = require("../Controllers/ptient");

var api = express.Router();
api.post("/save-ptient", ptientController.savePtient);
api.get('/get-ptients/:page?',ptientController.gePtients);
api.put("/update-ptient/:id",ptientController.updatePtient);
 api.delete('/delete-ptient/:id',ptientController.deletePtient);

module.exports = api;
