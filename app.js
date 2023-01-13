const   express = require('express'),
        app = express(),
        http = require('http').createServer(app),
        io = require('socket.io')(http),
        porta = process.env.PORT || 8080,
        handlebars = require('express-handlebars'),
        helpers = require('./config/helpers.js'),
        db = require('./config/db.js'); 

app.use(express.static("public"));


io.on("connection",(socket)=>{

    socket.on("ola",()=>{
        console.log("Cliente On: "+socket.id)
    });

    socket.on("mensagem",(mensagem)=>{
        io.emit("areaTexto",mensagem);
    })

})

const hbs = handlebars.create({
    extname:"html",
    defaultLayout:"default",
    helpers:helpers,
    layoutsDir:__dirname + "/views/layouts/",
    partialsDir:__dirname+"/views/partials/"
});

app.engine("html",hbs.engine);

app.set("view engine","html");

app.get("/",(req,resp)=>{
    resp.render("index",{title:"Home"})
})


http.listen(porta,()=>{console.log("Servidor Ativo")});