/**
 * Created by Administrator on 2016/10/8.
 */
var app = angular.module('myapp', ['ngRoute','app.controllers']);
app.controller('ctl',function ($scope) {

})
    .config(function ($routeProvider) {
        $routeProvider.
        //    首页
        when('/home', {
            templateUrl: 'navigation/home/home.html',
            controller: 'HomeController'
        }).
        //    福利社
        when('/welfareAssociation', {
            templateUrl: 'navigation/welfareAssociation/welfareAssociation.html',
            controller: 'WelfareAssociationController'
        }).
        when('/today', {
            templateUrl: 'navigation/welfareAssociation/today.html',
            controller: 'TodayController'
        }).
        //    发现
        when('/found', {
            templateUrl: 'navigation/found/found.html',
            controller: 'FoundController'
        }).
        //    目的地
        when('/destination', {
            templateUrl: 'navigation/destination/destination.html',
            controller: 'DestinationController'
        }).
        //    媒体报道
        when('/mediaReports', {
            templateUrl: 'navigation/mediaReports/mediaReports.html',
            controller: 'MediaReportsController'
        }).
        //     加入
        when('/join', {
            templateUrl: 'navigation/join/join.html',
            controller: 'JoinController'
        }).
        //在上面找不到 就执行 otherwise 的内容
        otherwise({
            redirectTo: '/home' //如果找不到路由就重定位到/home
        });
});
