'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const Path = require('path');

server.connection({
  port: process.env.PORT || 3000,
  routes: {
    cors: true,
    files: {
        relativeTo: Path.join(__dirname, 'public')
    }
  }
});

const locations = [];
const io = require('socket.io')(server.listener);

io.on('connection', function (socket) {

  socket.emit('locations', locations);

});

server.register(require('inert'), function () {});

server.route({
    method:'GET',
    path: '/event',
    handler: function(request, reply){
      const query = request.query;
      const location = {
        name: 'Pebble {code}',
        lat: query.lat,
        lng: query.lng,
        userId: query.userId,
        deviceId: query.deviceId,
        regionName: query.regionName,
        action: query.action,
        timestamp: query.timestamp
      };

        
      const existingRecord = locations.find(l => {
        return l.userId === location.userId;
      });

      if(existingRecord){
        existingRecord.deviceId = location.deviceId;
        existingRecord.timestamp = location.timestamp;
        existingRecord.action = location.action;        
      }else{
        locations.push(location);
      }
      
      io.sockets.emit('locations', locations);

      reply();
    }
  });

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
