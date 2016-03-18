$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module("kao.route.page-title", ["ngRoute", "kao.page-title"]).provider("PageTitleFormat", function() {
    var format = void 0;
    this.set = function(templateFormat) {
      format = templateFormat;
    };
    this.$get = function($interpolate) {
      return {"format": function(route) {
          return $interpolate(format)(route);
        }};
    };
  }).run(function($rootScope, PageTitle, PageTitleFormat) {
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
      if (current.title) {
        var title = PageTitleFormat.format(current);
        PageTitle.set(title);
      }
    });
  });
  return {};
});
