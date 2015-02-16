var _ = require('underscore');
var express = require('express');
var http = require('http');
var xml2js = require('xml2js');

var parser = new xml2js.Parser();
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

var response;

var unpack = function(destinations){
  var trains = [];
  _.each(destinations, function(dest){
    var estimates = dest.estimate
    _.each(estimates, function(train){
      trains.push({
        "destination": dest.destination[0],
        "minutes"  : train.minutes[0],
        "color": train.color[0],
        "length": train.length[0]
      });
    });
  });

  trains = _.sortBy(trains, function(train){
    return train.departTime;
  });
  response = trains;
};

var fetchData = function(callback){
  var _destinations = [];
  http.get("http://api.bart.gov/api/etd.aspx?cmd=etd&orig=24th&plat=2&key=MW9S-E7SL-26DU-VV8V", function(res){
    var completeResponse = "";  
    res.on('data', function(chunk){
      completeResponse += chunk;
    });
    res.on('end', function(){
      parser.parseString(completeResponse, function(err, parsedResult){
        destinations = parsedResult.root.station[0].etd;
        callback(destinations);
      });
    });
  });
};

app.get('/trains', function(req, res){
  var _trains = fetchData(unpack)
  res.format({
    'application/json': function(){
      res.send(response)
    }
  });
})

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
  fetchData(unpack);
  setInterval(function(){
    fetchData(unpack);
  }, 4000);
});
