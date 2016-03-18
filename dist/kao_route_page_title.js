$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module("kao.route.page-title", ["ngRoute", "kao.page-title"]).run(function($rootScope, PageTitle) {
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
      console.log(current);
      if (current.title) {
        PageTitle.set(current.title);
      }
    });
  });
  return {};
});
