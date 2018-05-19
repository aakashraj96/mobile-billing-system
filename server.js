
const Hapi = require('hapi');
const models = require('./models');

// models.users.create({
//   name: 'aakash',
//   email: 'aakash@a.com',
//   password: 'aafdfg',
//   dob: '1996-08-14',
//   mobile: '999999999'
// });

const server = new Hapi.Server();
server.connection({ port: 8080, host: 'localhost' });
server.route({
  path: '/login',
  method: 'POST',
  handler: (request, reply) => {
    models.users.find({
      where:{
        email: request.payload.email,
        password: request.payload.password
      }
    }).then((data)=>{
      if(data){
        reply('welcome');
      }
      else{
        reply('Wrong credentials');
      }
    });
  }
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
