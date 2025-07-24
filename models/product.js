const { INTEGER } = require("sequelize")

module.exports = (sequelize, DataTypes) =>{
    const Product = sequelize.define('product',{
        id:{
            autoIncrement: true,
            primaryKey : true,
            type: DataTapes.INTEGER
        },
        name:{
            allowNull:false,
            type:DataTypes.STRING

        },
        description:{
            type:DataTypes.TEXT
        },
        price:{
            allowNull:false,
            type:DataTypes.INTEGER
        }
    })
    return Product
}