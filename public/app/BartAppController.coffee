angular.module('BartApp')
.controller 'BartAppController', ($scope, $http, $interval)->
  $scope.trains = []

  fetchTrainData = ->
    $http.get '/trains'
      .success (data, status, headers, config)->
        console.log "success"
        $scope.trains = data
      .error (data, status, headers, config)->
        console.log "uh oh, error :("

  fetchTrainData()

  $interval ()->
    fetchTrainData()
  , 10000 

  return
