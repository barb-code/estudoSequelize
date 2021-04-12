const { Usuario, Post, Comentario, sequelize } = require('./models')
const { Op, where } = require('sequelize');

/*

// ----------------------------------------Metodos de Procura------------
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


// for (let index = 0; index < 6 ; index++) {
   
//     Comentario.findAll({
//         order:[['id','ASC']],
//         offset: index,
//         limit: 2
    
//     })
//     .then((resultado) => {
//         console.table(resultado.map(user => user.toJSON()));
//     }); 

// }    

// ------------------------------------ CRUD------------------------------


// Usuario.create({
//     nome: 'Natalia',
//     email: 'nat@digitalhouse.com',
//     senha: 'maravilhosaaaa123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });
// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id: 8
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })
// Usuario.destroy({
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

//------------------------------------- DEAFIO SEQUELIZE - CRUD---------------------
// Usuario.create({
//     nome: 'Bárbara Lícia',
//     email: 'barbaralicia@avanade.com',
//     senha: 'babi123'
// })
// .then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Post.create({
//          texto: 'DALE!',
//          usuarios_id: 10,
         
//          where:{
//             usuarios_id: 10
//          }
//      }).then((resultado) => {
//          console.log(resultado.toJSON());
//      });

// Post.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// }); 

// Usuario.update({
//      email: 'sergio@digitalhouse.com'
//  }, {
//      where: {
//          nome:{[Op.like]: '%Sergio%'}
//      }
//  }).then((resultado) => {
//      console.log(resultado);
//  })

// Usuario.findAll()
//  .then((resultado) => {
//      console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.destroy({
//       where: {
//           id: 3
//       }
//   }).then((resultado) => {
//       console.log(resultado);
//   })
    
//  Usuario.findAll()
//   .then((resultado) => {
//       console.table(resultado.map(user => user.toJSON()));
//  });