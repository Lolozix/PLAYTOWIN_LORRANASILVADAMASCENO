require('dotenv').config();

const express = require("express");
const conn = require('./db/conn');
const Jogos = require("./models/Jogos")
const Usuario = require('./models/Usuario');

const handlebars = require("express-handlebars");

const app = express();


app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ urlencoded: true }));
app.use(express.json());

app.get("/usuario/novo", (req, res) => {
    res.render(`formularioUsuario`);
})

app.get("/", (req, res) => {
    res.render(`home`);
})

app.get("/usuarios", (req, res) => {
    res.render(`usuarios`);
})

app.get("/jogos/novo", (req, res) => {
    res.sendFile(`${__dirname}/views/formularioJogos.html`);
})

app.post("/jogos/novo", async (req, res) => {
    const dadosJogos = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        preco: req.body.preco
    };

    const jogos = await Jogos.create(dadosJogos);
    res.send("Jogo inserido sob o id" + jogos.id);
})
   
app.post("/usuario/novo", async (req, res) => {
    const dadosUsuario = {
        nickname: req.body.nickname,
        nome: req.body.name

    };

    const usuario = await Jogos.create(dadosUsuario);
    res.send("Usuario inserido sob o id" + usuario.id);
})


app.listen(8000, () => {
    console.log("Server rodando!");
})

conn
    .sync()
    .then(() => {
        console.log('Está conectado e sincronizado corretamente com o banco de dados!');
    })
    .catch((err) => {
        console.log('Ocorreu um erro e não está sendo sincronizado mais' + err);
    })




conn
    .authenticate()
    .then(() => {
        console.log('Está conectado com sucesso!');

    })
    .catch((err) => {
        console.log('Ocorreu um erro' + err);
    })