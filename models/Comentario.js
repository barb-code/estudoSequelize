module.exports = (sequelize, DataTypes) => {

    const Comentario = sequelize.define(
        'Comentario', {
            texto: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            posts_id: DataTypes.INTEGER
        }, {
            tableName: "comentarios",
            timestamps: false
        }

    )
    

    Comentario.associate = (models) => {
        // relação N:1 (vários comentarios para um post)
        Comentario.belongsTo(models.Post, { as: "posts", foreignKey: "posts_id"})
    }
    return Comentario;
}