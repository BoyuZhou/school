mainModule.controller('classController', ['$scope', '$state', 'mainService', '$timeout', function ($scope, $state, mainService, $timeout) {
    var vm = this;
    vm.class_list = {
        thead: [
            '序号', '班级名称', '班级编码', '开班时间', '创建时间', '操作'
        ],
        tbody: [
            ['1', '超级一班', '2399', '2016-06-06 14:21:06', '2016-06-05 14:21:06'],
            ['1', '超级一班', '2399', '2016-06-06 14:21:06', '2016-06-05 14:21:06'],
            ['1', '超级一班', '2399', '2016-06-06 14:21:06', '2016-06-05 14:21:06'],
            ['1', '超级一班', '2399', '2016-06-06 14:21:06', '2016-06-05 14:21:06'],
            ['1', '超级一班', '2399', '2016-06-06 14:21:06', '2016-06-05 14:21:06']
        ]

    };
    $scope.data = {
        thead: [
            '序号', '老师姓名', '老师昵称', '邮箱', '手机号', '操作'
        ],
        tbody: [
            ['1', '周老师', '周老师', '3555444@qq.com', '15369680010']
            ]
    };

    vm.allotTeacher = function () {
        $state.go('home.allotTeacher');
    };

    vm.choice_teacher = function () {
        $('#promp').css({'max-width':"800px", 'margin-left': "-400px"});
        mainService.prompSrc = 'view/promp/choice_teacher.html';
        $timeout(function () {
            mainService.promp = true;
        })
    }


}]);