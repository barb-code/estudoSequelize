const { Usuario, Post, Comentario, sequelize } = require('./models')
/*

/ ----------------
Usuario.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
}); 

Usuario.findOne({
    where: {
        nome:'Gabriel Brunetti'
    }
})
.then((resultado) => {
    console.log(resultado);
});

Usuario.findByPk(2)
.then((resultado) => {
    console.log(resultado);
});

/ ----------------
Post.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
}); 

Post.findByPk(2)
.then((resultado) => {
    console.log(resultado);
})

Post.findOne({
    where: {
        texto:'Como foi o fim de semana?'
    }
})
.then((resultado) => {
    console.log(resultado);
});

/ ----------------
Comentario.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
}); 

Comentario.findByPk(2)
.then((resultado) => {
    console.log(resultado);
})

Comentario.findOne({
    where: {
        texto:'Oi gente é o !@#!$%! Meu nome agora é Zé Pequeno!'
    }
})
.then((resultado) => {
    console.log(resultado);
});

*/


Post.findOne({
    where: {
        texto:'Como foi o fim de semana?'
    }
})
.then((resultado) => {
    console.log(resultado);
});

