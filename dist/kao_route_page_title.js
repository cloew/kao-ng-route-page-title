$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module("kao.route.page-title", ["ngRoute", "kao.page-title"]).run(function($rootScope, PageTitle, FormattedPageTitle) {
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
      if (current.title) {
        FormattedPageTitle.set(current);
      }
    });
  });
  return {};
});
