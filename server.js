
const Hapi = require('hapi');



const server = new Hapi.Server();
server.connection({ port: 8080, host: 'localhost' });
server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => {
    reply('Hello hapi');
  },
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
