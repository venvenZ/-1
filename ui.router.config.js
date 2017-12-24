(function () {
    'use strict';
    angular.module('enjoyApp')
        .config(routerConfigFunc);


    /*路由配置*/
    function routerConfigFunc($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('login')
        $stateProvider.state(
            'login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'login.Controller',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'login',
                            files: [
                                'js/login.controller.js'
                            ]
                        })
                    }]
                }
            }
        )
            .state(
                'app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'views/app.html',
                    controller: 'app.Controller',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'app',
                                files: [
                                    'js/app.controller.js'
                                ]
                            })
                        }]
                    }
                }
            )
            .state(
                'app.introduce', {
                    url: '/introduce',
                    templateUrl: 'views/introduce.html',
                    controller: 'introduce.Controller',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'introduce',
                                files: [
                                    'js/introduce.controller.js'
                                ]
                            })
                        }]
                    }
                }
            )
            .state(
                'app.experience', {
                    url: '/experience',
                    templateUrl: 'views/experience.html',
                    controller: 'experience.Controller',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'experience',
                                files: [
                                    'js/experience.controller.js'
                                ]
                            })
                        }]
                    }
                }
            )
            .state(
                'app.project', {
                    url: '/project',
                    templateUrl: 'views/project.html',
                    controller: 'project.Controller',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'project',
                                files: [
                                    'js/project.controller.js'
                                ]
                            })
                        }]
                    }
                }
            )
            .state(
                'app.idea', {
                    url: '/idea',
                    templateUrl: 'views/ideal.html',
                    controller: 'idea.Controller',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'idea',
                                files: [
                                    'js/idea.controller.js'
                                ]
                            })
                        }]
                    }
                }
            )
    }
})();