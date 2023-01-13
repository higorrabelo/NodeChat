const mongoose = require('mongoose');
const stringConexao = "mongodb+srv://Higor:Higor120783@cluster0.psui0rs.mongodb.net/chatnode";

mongoose.connect(stringConexao);

const db = mongoose.connection;

module.exports = db;