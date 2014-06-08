var app = angular.module('groonga-suggest', []);

app.controller('MainController', function($scope, $http) {
  $scope.completes = [];
  $scope.corrections = [];
  $scope.suggests = [];
  url = "http://127.0.0.1:3100";

  $scope.change = function() {
    query = encodeURI($scope.newSuggest.content);
    limit = "10";
    dataset = "test";
    threshold = "1";
    user = "user";
    current_time = Number(new Date);

    // complete
    type = "complete";
    request = url + '/?q=' + query + '&m=' + limit + '&t=' + type + '&n=' + dataset + '&l=' + dataset + '&h=' + threshold + '&i=' + user + '&s=' + time + '&callback=JSON_CALLBACK';
    $http.jsonp(request).success(function(response){
       $scope.completes = response;
     });

     // suggest
    type = "suggest"; 
    request = url + '/?q=' + query + '&m=' + limit + '&t=' + type + '&n=' + dataset + '&l=' + dataset + '&h=' + threshold + '&i=' + user + '&s=' + time + '&callback=JSON_CALLBACK';
    $http.jsonp(request).success(function(response){
       $scope.suggests = response;
     });
  };

  $scope.submit = function() {
    query = encodeURI($scope.newSuggest.content);
    limit = "10";
    dataset = "test";
    threshold = "1";
    user = "user";
    time = Number(new Date);
    
    //submit 
    type = "submit";
    request = url + '/?q=' + query + '&m=' + limit + '&t=' + type + '&n=' + dataset + '&l=' + dataset + '&h=' + threshold + '&i=' + user + '&s=' + time + '&callback=JSON_CALLBACK';
    $http.jsonp(request).success(function(response){
	$scope.newSuggest.content = '';
    });

    //correction
    type = "correction";
    request = url + '/?q=' + query + '&m=' + limit + '&t=' + type + '&n=' + dataset + '&l=' + dataset + '&h=' + threshold + '&i=' + user + '&s=' + time + '&callback=JSON_CALLBACK';
    $http.jsonp(request).success(function(response){
       $scope.corrections = response;
    });
  };

});
