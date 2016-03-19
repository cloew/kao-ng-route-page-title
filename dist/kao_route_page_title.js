$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module("kao.route.page-title", ["ngRoute", "kao.page-title"]).run(function($rootScope, PageTitle, FormattedPageTitle) {
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
      if (current.full_title) {
        PageTitle.set(current.full_title, current);
      } else {
        if (current.title) {
          if (FormattedPageTitle.isSetup()) {
            FormattedPageTitle.set(current);
          } else {
            PageTitle.set(current.title, current);
          }
        }
      }
    });
  });
  return {};
});
