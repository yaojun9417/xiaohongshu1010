/**
 * Created by Administrator on 2016/10/8.
 */
angular.module('app.controllers',[])
    //首页
    .controller('HomeController',function ($scope) {
        $scope.a1="我爱你";
})
    //福利社
    .controller('WelfareAssociationController',function ($scope,$location) {
        $scope.a1="我是福利社";
    })
    .controller('TodayController',function ($scope) {
        $scope.a1="我是仅限今日";
    })
    //发现
    .controller('FoundController',function ($scope) {
        $scope.a1="我是发现";
    })
    // 目的地
    .controller('DestinationController',function ($scope) {
        $scope.a1="我是目的地";
    })
    //媒体报道
    .controller('MediaReportsController',function ($scope) {
        $scope.a1="我是媒体报道";
    })
    //加入
    .controller('JoinController',function ($scope) {
        $scope.a1="我是加入";
    })
