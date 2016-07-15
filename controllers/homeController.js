mainModule.controller('homeController', ['$scope', '$state', '$compile', 'mainService', '$rootScope', function ($scope, $state, $compile, mainService, $rootScope) {
    var vm = this;
    //$rootScope.promp = false;
    vm.mainService = mainService;

    $('#side-menu').metisMenu();

    vm.teacher = {
        thead: [
            '序号', '老师姓名', '老师昵称', '邮箱', '手机号'
        ],
        tbody: [
            ['1', '周老师', '周老师', '3555444@qq.com', '15369680010'],
            ['1', '周老师', '周老师', '3555444@qq.com', '15369680010'],
            ['1', '周老师', '周老师', '3555444@qq.com', '15369680010'],
            ['1', '周老师', '周老师', '3555444@qq.com', '15369680010'],
            ['1', '周老师', '周老师', '3555444@qq.com', '15369680010']
        ]
    };

}]);