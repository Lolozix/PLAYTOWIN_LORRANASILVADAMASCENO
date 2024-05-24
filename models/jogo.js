const db = require('../db/conn')
const {DataTypes} = require("sequelize");

const jogo = db.define("jogo", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    titulo:{
        type:DataTypes.STRING,
        require: true,
    },
    descricao:{
        type:DataTypes.STRING,
        require: true,
    },
    preco:{
        type:DataTypes.NUMBER,
        require: true
    }
});

module.exports= jogo;
