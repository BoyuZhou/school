mainModule.controller('statementController', ['$scope', function ($scope) {
    var vm = this;
    vm.data = {};

    vm.teachData = {
        thead: ['教师', '班级', '教师授课次数', '使用课件次数', '使用视频次数'],
        tbody: [
            {name: '成大陆', class: '超级一般', teach_num: '44', use_count: '55', useVido_count: '666'},
            {name: '成大陆', class: '超级一般', teach_num: '44', use_count: '55', useVido_count: '666'},
            {name: '成大陆', class: '超级一般', teach_num: '44', use_count: '55', useVido_count: '666'},
            {name: '成大陆', class: '超级一般', teach_num: '44', use_count: '55', useVido_count: '666'},
            {name: '成大陆', class: '超级一般', teach_num: '44', use_count: '55', useVido_count: '666'},
            {name: '成大陆', class: '超级一般', teach_num: '44', use_count: '55', useVido_count: '666'},
            {name: '成大陆', class: '超级一般', teach_num: '44', use_count: '55', useVido_count: '666'}
        ]
    };
    vm.studyData = {
        thead: [ '班级', '教师授课次数', '使用课件次数', '使用视频次数', '学习时间'],
        tbody: [
            [ '超级一般', '44', '55', '666', '5000'],
            [ '超级一般', '44', '55', '666', '5000'],
            [ '超级一般', '44', '55', '666', '5000'],
            [ '超级一般', '44', '55', '666', '5000'],
            [ '超级一般', '44', '55', '666', '5000'],
            [ '超级一般', '44', '55', '666', '5000'],
            [ '超级一般', '44', '55', '666', '5000']
        ]
    };
    vm.execData = {
        thead: [ '班级', '分配练习数量', '联系参加人次', '练习平均分', '练习累计时间'],
        tbody: [
            ['超级一般', '44', '55', '99', '5分30秒'],
            ['超级一般', '44', '55', '99', '5分30秒'],
            ['超级一般', '44', '55', '99', '5分30秒'],
            ['超级一般', '44', '55', '99', '5分30秒'],
            ['超级一般', '44', '55', '99', '5分30秒'],
            ['超级一般', '44', '55', '99', '5分30秒'],
            ['超级一般', '44', '55', '99', '5分30秒']
        ]
    };
    vm.evaData = {
        thead: ['测评名称', '班级', '考试时间', '参加人数', '平均分'],
        tbody: [
            ['成大陆', '超级一般', '44', '55', '666'],
            ['成大陆', '超级一般', '44', '55', '666'],
            ['成大陆', '超级一般', '44', '55', '666'],
            ['成大陆', '超级一般', '44', '55', '666'],
            ['成大陆', '超级一般', '44', '55', '666'],
            ['成大陆', '超级一般', '44', '55', '666'],
            ['成大陆', '超级一般', '44', '55', '666']
        ]
    };

    vm.data = vm.teachData;
    vm.tabState = "teachData";
    vm.changeTab = function (name) {
        vm.tabState = name;
        vm.data = vm[name];
    }
}]);