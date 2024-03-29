mainModule.controller('resourceController', ['$scope', '$state', function ($scope, $state) {
    var vm = this;

    vm.course_resource = {
        thead: ['序号', '名称', '课件编号', '故障编号', '创建时间', '操作'],
        tbody: [
            ['1', '诊断喷油器断路故障', 'SBT_ES_FO', 'SBT_ES_FO_001', '2016-07-06'],
            ['1', '诊断喷油器断路故障', 'SBT_ES_FO', 'SBT_ES_FO_001', '2016-07-06'],
            ['1', '诊断喷油器断路故障', 'SBT_ES_FO', 'SBT_ES_FO_001', '2016-07-06'],
            ['1', '诊断喷油器断路故障', 'SBT_ES_FO', 'SBT_ES_FO_001', '2016-07-06'],
            ['1', '诊断喷油器断路故障', 'SBT_ES_FO', 'SBT_ES_FO_001', '2016-07-06']
        ]
    };

    vm.video_list = {
        thead: ['序号', '资源名称', '上传者', '资源类型', '创建时间', '操作'],
        tbody: [
            ['001', '发动机教学', '好老师', '视频', '2016-06-26'],
            ['001', '发动机教学', '好老师', '视频', '2016-06-26'],
            ['001', '发动机教学', '好老师', '视频', '2016-06-26'],
            ['001', '发动机教学', '好老师', '视频', '2016-06-26'],
            ['001', '发动机教学', '好老师', '视频', '2016-06-26']
        ]
    };

    vm.edit_course = function () {
        $state.go('home.edit_course');
    };

}]);