app.controller('AuthCtrl', ['$scope','auth','$state', function($scope, auth, $state){
  $scope.user = {};

  $scope.register = function () {
    auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };

  $scope.login = function(){
    auth.login($scope.user).then(function(){
      $state.go('home');
    });
  };
}])