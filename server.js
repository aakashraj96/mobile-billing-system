
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
server.route([{
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
        reply(JSON.stringify({
          msg: 'welcome'
        }));
      }
      else{
        reply(JSON.stringify({
          msg: 'Wrong credentials'
        }));
      }
    });
  }
},
{
  path: '/signup',
  method: 'POST',
  handler: (request, reply) => {
    models.users.create({
      name: request.payload.name,
      email: request.payload.email,
      password: request.payload.password,
      Dob: request.payload.dob,
      mobile: request.payload.mobile
    }).then((data)=>{
      console.log(data);
      if(data){
        reply(JSON.stringify({
          msg: 'Signed up'
        }));
      }
      else{
        reply('Error');
      }
    }).catch((err)=>{
      reply(JSON.stringify({
        msg: 'sign up err'
      }))
    });
  }
}]);

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
