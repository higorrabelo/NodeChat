const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id:{type:String},
    nome:{type:String, require:true},
    email:{type:String, require:true},
    senha:{type:String, require: true},
});

const modelUsuario = mongoose.model("usuarios",schema);

module.exports = modelUsuario;