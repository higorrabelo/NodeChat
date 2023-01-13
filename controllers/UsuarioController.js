const usuarios = require('../models/Usuario.js');
class UsuarioController{

    consultarUsuarios = (req,resp)=>{
        usuarios.find((erro,data)=>{
            if(erro){
                console.log("Erro ao procurar usuários")
            }else{
                resp.json(data)
            }
        });
    }
   
}

module.exports = UsuarioController;