'use strict';

System.register(['bootstrap', 'services/user-auth'], function (_export, _context) {
  "use strict";

  var UserAuth;
  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  _export('configure', configure);

  return {
    setters: [function (_bootstrap) {}, function (_servicesUserAuth) {
      UserAuth = _servicesUserAuth.UserAuth;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=main.js.map
