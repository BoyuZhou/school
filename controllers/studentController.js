mainModule.controller('studentController', ['$scope', 'mainService', '$timeout', '$state', function ($scope, mainService, $timeout, $state) {
    var vm = this;

    //É¾³ý°´Å¥
    vm.delete = function () {
        mainService.prompSrc = 'view/promp/student_delete.html';
        $timeout(function () {
            mainService.promp = true;
        })
    };

    //ÐÞ¸Ä°´Å¥
    vm.changeInfo = function () {
        $state.go('home.studentChange');
    };

    //ÐÞ¸ÄÃÜÂë
    vm.changepw = function () {
        mainService.prompSrc = 'view/promp/student_changepw.html';
        $timeout(function () {
            mainService.promp = true;
        },10);
    };

}]);