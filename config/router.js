mainModule.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state(
        'login',
        {
            url: '/login',
            templateUrl: 'view/login.html',
            controller: 'loginController as vm',
            onEnter : function() {
                $('body').addClass('login-bg');
            },

            onExit : function() {
                $('body').removeClass('login-bg');
            }
        })
        .state('home', {
            url: '/home',
            templateUrl: 'view/home.html',
            controller: 'homeController as vm',
            abstract: true
        })
        .state('home.students', {
            url: '/students',
            templateUrl: 'view/students.html',
            controller: 'studentController as vm'
        })
        .state('home.teachers', {
            url: '/teachers',
            templateUrl: 'view/teachers.html',
            controller: 'teacherController as vm'
        })
        .state('home.administrator', {
            url: '/administrator',
            templateUrl: 'view/administrator.html',
            controller: 'adminController as vm'
        })
        .state('home.studentChange', {
            url: '/studentChange',
            templateUrl: 'view/student_change.html',
            controller: 'studentController as vm'
        })
        .state('home.statements', {
            url: '/statements',
            templateUrl: 'view/statements.html',
            controller: 'statementController as vm'
        })
        .state('home.statementInfo', {
            url: '/statementInfo',
            templateUrl: 'view/statement_info.html',
            controller: 'statementController as vm'
        })
        .state('home.class', {
            url: '/class',
            templateUrl: 'view/class.html',
            controller: 'classController as vm'
        })
        .state('home.add_class', {
            url: '/add_class',
            templateUrl: 'view/add_class.html',
            controller: 'classController as vm'
        })
        .state('home.allotTeacher', {
            url: '/allotTeacher',
            templateUrl: 'view/allot_teacher.html',
            controller: 'classController as vm'
        })
        .state('home.resource', {
            url: '/resource',
            templateUrl: 'view/course_resource.html',
            controller: 'resourceController as vm'
        })
        .state('home.video_resource', {
            url: '/video_resource',
            templateUrl: 'view/video_resource.html',
            controller: 'resourceController as vm'
        })
        .state('home.edit_course', {
            url: '/edit_course',
            templateUrl: 'view/edit_course.html',
            controller: 'resourceController as vm'
        })
        .state('notFound', {
        url: '/notFound ',
        templateUrl: 'view/notFound.html'
    });

    //$urlRouterProvider.otherwise('/login');
});