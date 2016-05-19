app.controller('NavCtrl', ['$scope', 'auth', function($scope, auth){
  console.log("nav controller MAN!")

  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentUser = auth.currentUser;
  $scope.logOut = auth.logOut;
}]);