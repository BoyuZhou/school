mainModule.controller('studentController', ['$scope', 'mainService', '$timeout', '$state', function ($scope, mainService, $timeout, $state) {
    var vm = this;

    //ɾ����ť
    vm.delete = function () {
        mainService.prompSrc = 'view/promp/student_delete.html';
        $timeout(function () {
            mainService.promp = true;
        })
    };

    //�޸İ�ť
    vm.changeInfo = function () {
        $state.go('home.studentChange');
    };

    //�޸�����
    vm.changepw = function () {
        mainService.prompSrc = 'view/promp/student_changepw.html';
        $timeout(function () {
            mainService.promp = true;
        },10);
    };

}]);