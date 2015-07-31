(function() {
  'use strict';

  angular
    .module('randemojinator')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
