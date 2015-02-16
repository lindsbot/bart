// Generated by CoffeeScript 1.8.0
angular.module('BartApp').controller('BartAppController', function($scope, $http, $interval) {
  var fetchTrainData;
  $scope.trains = [];
  fetchTrainData = function() {
    return $http.get('/trains').success(function(data, status, headers, config) {
      console.log("success");
      return $scope.trains = data;
    }).error(function(data, status, headers, config) {
      return console.log("uh oh, error :(");
    });
  };
  fetchTrainData();
  $interval(function() {
    return fetchTrainData();
  }, 10000);
});
