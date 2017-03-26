'use strict';

System.register(['bootstrap', 'services/user-auth'], function (_export, _context) {
  "use strict";

  var UserAuth, isLoggedIn;
  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();

    aurelia.start().then(function (a) {
      var rootComponent = isLoggedIn() ? 'app' : 'login';
      a.setRoot(rootComponent, document.body);
    });
  }

  _export('configure', configure);

  return {
    setters: [function (_bootstrap) {}, function (_servicesUserAuth) {
      UserAuth = _servicesUserAuth.UserAuth;
    }],
    execute: function () {
      isLoggedIn = function isLoggedIn() {
        return true;
      };
    }
  };
});
//# sourceMappingURL=main.js.map
