(function() {
  'use strict';

  angular
    .module('randemojinator')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('about', {
          url: '/about',
          templateUrl: 'app/main/about.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
