'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export, _context) {
  "use strict";

  var inject, HttpClient, _dec, _class, UserAuth;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }],
    execute: function () {
      _export('UserAuth', UserAuth = (_dec = inject(HttpClient), _dec(_class = function () {
        function UserAuth(client) {
          _classCallCheck(this, UserAuth);

          this.auth = false;
          this.token = '';

          this.client = client;
        }

        UserAuth.prototype.activate = function activate() {
          var _this = this;

          return new Promise().then(function (resolve) {
            if (_this.auth) {
              resolve();
            } else {
              _this.checkAuth().then(function () {
                return resolve();
              });
            }
          });
        };

        UserAuth.prototype.checkAuth = function checkAuth() {
          var _this2 = this;

          return this.client.fetch('api/init').then(function (res) {
            _this2.token = res.token;
          });
        };

        return UserAuth;
      }()) || _class));

      _export('UserAuth', UserAuth);
    }
  };
});
//# sourceMappingURL=user-auth.js.map
