const db = require('../db/conn');
const {DataTypes} = require("sequelize");

const Jogo = db.define("Jogo",{
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Jogo