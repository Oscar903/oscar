'use strict' 
var mongoose = require('mongoose');
var app =require('./app');
var port = process.env.port || 8082;

mongoose.connect('mongodb+srv://oscar:oscar123@cluster0.sircb.mongodb.net/Ptient-Form?retryWrites=true&w=majority',
(err,res)=> {
    if(err){
        throw err;
    }else{
        console.log('Conectado a MongoDB')
        app.listen(port, function(){
            console.log("Servidor corriendo en http://localhost:"+port);
        })
    }
}); 




