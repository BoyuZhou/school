mainModule.directive('statementHead', function () {
    return {
        restrict: 'EA',
        controller: 'statementController',
        templateUrl: 'template/statement_head.html'
    }
});

mainModule.directive('statementSearch', function () {
   return {
       restrict: 'EA',
       controller: 'statementController',
       templateUrl: 'template/statement_search.html'
   }
});

mainModule.directive('exerciseInfo', function () {
   return {
       restrict: 'EA',
       controller: 'statementController',
       templateUrl: 'template/exercise_info.html'
   }
});