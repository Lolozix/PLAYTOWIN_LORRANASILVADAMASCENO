require('dotenv').config();

const express = require("express");
const conn = require('./db/connn');
const jogo = require('./models/jogos')
const handlebars = require("express-handlebars");
const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());
app.get("/jogo/novidade", (req, res)=> {
    res.sendFile(`${__dirname}/views/formulario.html`);
})
app.post("/jogo/novidade", async(req, res)=>{
    const dadosJogo={
        titulo: req.body.titulo,
        descr: req.body.descr,
        valor: req.body.valor
    };
    const jogo = await jogos.create(dadosJogo);
    res.send("Jogo cadastrado com o id" + jogo.id);
})

app.listen(8000, ()=>{
    console.log("Servidor Rodando com sucesso");
});

conn
.sync()
.then( () =>{
    console.log("Está conectado ao Banco de Dados");
})
.catch((err)=>{
    console.log("Ocorreu erro e não esta sincronizado" + err);
})