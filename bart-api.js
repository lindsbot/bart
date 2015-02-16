var _ = require('underscore');
var express = require('express');
var http = require('http');
var xml2js = require('xml2js');
var Bart = require('bart-api');
var bart = new Bart('MW9S-E7SL-26DU-VV8V');

bart.sched.arrive({
    orig: 'SFIA',
    dest: 'PITT'
  }, function (err, xml, body) {
    if (err) {
      throw err;
    }

    var trips = [];

    xml.find('/root/schedule/request/trip').forEach(function (trip) {
      trips.push({
        orig: trip.attr('origin').value(),
        dest: trip.attr('destination').value(),
        times: {
          orig: trip.attr('origTimeMin').value(),
          dest: trip.attr('destTimeMin').value()
        },
        legs: trip.find('leg').map(function (leg) {
          return {
            orig: leg.attr('origin').value(),
            dest: leg.attr('destination').value(),
            line: leg.attr('line').value(),
            head: leg.attr('trainHeadStation').value(),
            times: {
              orig: leg.attr('origTimeMin').value(),
              dest: leg.attr('destTimeMin').value()
            }
          };
        })
      })
    });

    console.log(JSON.stringify(trips, true, 2));
  });

  bartApp.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

var server = bartApp.listen(3000, function(){
  console.log('Listening on port %d', server.address().port);

});
