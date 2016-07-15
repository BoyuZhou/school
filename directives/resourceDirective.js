mainModule.directive('resourceTable', function () {
    return {
        restrict: 'EA',
        controller: 'resourceController',
        templateUrl: 'template/tableTemplate2.html'
    }
});