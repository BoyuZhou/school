mainModule.factory('statementFactory', function ($state) {

    /**
     * 扩展数据上点击查看方法
     * @param ary 数据数组
     */
   var extendTeachData = function (ary) {
        for (var i = 0; i < ary.length; i ++) {
            //查看教师授课详情
            ary[i].teacherInfo = function () {

            };
            //查看班级授课详情
            ary[i].classInfo = function () {

            }
        }
    };
    /**
     * 扩展学习数据方法
     * @param ary
     */
    var extendStudyData = function (ary) {
        for (var i = 0; i < ary.length; i ++) {
            //查看班级学习详情
            ary[i].classInfo = function () {

            };
            //课外学习时间详情
            ary[i].studyTimeInfo = function () {

            }
        }
    };
    /**
     * 扩展练习数据方法
     * @param ary
     */
    var extendExecData = function (ary) {
        for (var i = 0; i < ary.length; i ++) {
            //查看班级练习详情
            ary[i].classInfo = function () {
                $state.go('home.statementInfo');
            };
        }
    };
    /**
     * 扩展测评数据点击方法
     * @param ary
     */
    var extendEvaData = function (ary) {
        for (var i = 0; i < ary.length; i ++) {
            //查看班级评测详情
            ary[i].classInfo = function () {

            };
        }
    }


});