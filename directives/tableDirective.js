mainModule.directive('xcjTable', function () {
   return {
       restrict: 'EA',
       scope: {
           data: '='
       },
       link: function (scope, element, attrs){
         var length = scope.data.thead.length;
           for(var i = 0; i < length; i ++) {
               scope["click_" + i] = function () {

               }
           }
       },
       templateUrl: 'template/tableTemplate.html'
   }
});