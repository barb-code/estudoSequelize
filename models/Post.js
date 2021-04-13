module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define(
        'Post', {
            texto: DataTypes.STRING,
            img: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.INTEGER
            
        }, {
            tableName: "posts",
            timestamps: false
        }

    )
    
    Post.associate = (models) => {
        // relação N:1 (vários posts um usuario)
        Post.belongsTo(models.Usuario, { as: "usuario", foreignKey: "usuarios_id"})
     
        Post.hasMany(models.Comentario, {as:"comentarios", foreignKey:"posts_id"})
        
        // relação N:N (post tem curtidas de varios usuarios)
        Post.belongsToMany(models.Usuario, {
            as: "curtiu",   // alias da relação
            through: "curtidas",    // tabela intermediária
            foreignKey: "posts_id",
            otherKey: "usuarios_id",
            timestamps: false
        })
    }

    
   

    return Post;

}

