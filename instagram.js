const { Usuario, Post, Comentario, sequelize } = require('./models')
const { Op } = require('sequelize');

/*

/ ----------------
Usuario.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
}); 

Usuario.findOne({
    where: {
        nome:'Gabriel Brunetti'
    }
})
.then((resultado) => {
    console.table(resultado);
});

Usuario.findByPk(2)
.then((resultado) => {
    console.table(resultado);
});

/ ----------------
Post.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
}); 

Post.findAll({
    where: {
        texto: {[Op.like]: '%oi'}
    }
})
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
}); 


Post.findByPk(2)
.then((resultado) => {
    console.table(resultado);
})

Post.findOne({
    where: {
        texto:'Como foi o fim de semana?'
    }
})
.then((resultado) => {
    console.table(resultado);
});

/ ----------------
Comentario.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
}); 

Comentario.findByPk(2)
.then((resultado) => {
    console.table(resultado);
})

Comentario.findOne({
    where: {
        texto:'Oi gente é o !@#!$%! Meu nome agora é Zé Pequeno!'
    }
})
.then((resultado) => {
    console.table(resultado);
});

*/

//  Usuario.findAll({
// where: {
//     nome: {[Op.like]: '%a%'}

//     }
// })
// .then((resultado) => {     
//     console.table(resultado.map(user => user.toJSON()));
// });

//  Usuario.findAll({
//     where:{nome:{[Op.notLike]: '%a%'}}
    
//  })
//  .then((resultado) => {
//      console.table(resultado.map(Usuario => Usuario.toJSON()));
//  });


for (let index = 0; index < 6 ; index++) {
   
    Comentario.findAll({
        order:[['id','ASC']],
        offset: index,
        limit: 2
    
    })
    .then((resultado) => {
        console.table(resultado.map(user => user.toJSON()));
    }); 

}    
