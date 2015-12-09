const locations = [];

module.exports = [
  {
    method:'GET',
    path: '/bg/',
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

      locations.push(location);
    }
  }

];