

var usuario = prompt("Digite seu Nome")
var campo = document.getElementById("nome")
campo.innerHTML = usuario
var data = new Date();
var areaTexto = document.getElementById("mensagens");

var socket = io()

socket.emit("ola",()=>{
    console.log("foi")
})

socket.on("areaTexto",(msg)=>{
    areaTexto.value += msg+"\n";
});

document.addEventListener("keypress",(e)=>{
    if(e.key === 'Enter'){
        enviarMensagem()
    }
});


function enviarMensagem(){
    var msg = document.getElementById("mensagem");
    var tmsg = `${usuario} Enviado: ${data.getUTCDay("DD")}/${data.getMonth("MM")+1}/${data.getFullYear()} \nMensagem: ${msg.value}`;
    msg.value = ""
    socket.emit("mensagem",tmsg)
}