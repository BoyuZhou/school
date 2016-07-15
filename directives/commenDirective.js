mainModule.directive('xcjPath', function () {
    return {
        restrict: 'EA',
        scope: {
            path1: '@',
            path2: '@'
        },
        templateUrl: 'template/path.html'
    }

});

mainModule.directive('xcjPromp', function ($timeout, $rootScope) {
    return {
        redirect: 'EA',
        controller: 'homeController',
        link: function (scope, element, attrs) {
            //console.log(scope);
            //scope.$watch(function(){
            //    return scope.vm.mainService.promp;
            //    }, function(newVal) {
            //    if(newVal){
            //        //scope.tpl = scope.vm.mainService.prompSrc;
            //
            //    }
            //});
            scope.closePromp = function () {
                scope.vm.mainService.promp = false;
                $('.promp').css({'max-width':'500px', marginLeft: '-250px'});
            }
        },
        template:'<div class="promp"  id="promp">\
        <div ng-click="closePromp()"><span class="glyphicon glyphicon-remove" style="position: absolute; right: 10px;top: 20px;z-index: 10;"></span></div>\
                 <div id="clude" class="row" style="padding: 5px" ng-include src="vm.mainService.prompSrc">\
                 </div>\
                 </div>'
    }
});