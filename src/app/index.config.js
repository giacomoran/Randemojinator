(function() {
  'use strict';

  angular
    .module('randemojinator')
    .config(['$compileProvider', config]);

  /** @ngInject */
  function config($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|file):|data:image\//);
  }

})();
