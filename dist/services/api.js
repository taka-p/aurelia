'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export, _context) {
  "use strict";

  var inject, HttpClient, json, _dec, _class, ApiClient;

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
      json = _aureliaFetchClient.json;
    }],
    execute: function () {
      _export('default', ApiClient = (_dec = inject(HttpClient), _dec(_class = function () {
        function ApiClient(client) {
          _classCallCheck(this, ApiClient);

          client.configure(function (config) {
            config.withBaseUrl('http://localhost:5678').withDefaults({
              mode: 'cors',
              credentials: 'include',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'token'
              }
            }).withInterceptor({
              request: function request(_request) {
                console.log('Requesting ' + _request.method + ' ' + _request.url);
                return _request;
              },
              response: function response(_response) {
                console.log('Received ' + _response.status + ' ' + _response.url);
              }
            });
          });
          this.client = client;
        }

        ApiClient.prototype.get = function get(url) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          var _params = _.isEmpty(params) ? '' : '?' + _.map(params, function (value, key) {
            return key + '=' + value;
          }).join('&');
          return this.client.fetch(url + _params).then(function (res) {
            return res.json();
          });
        };

        ApiClient.prototype.post = function post(url, params) {
          return this.client.fetch(url, {
            method: 'POST',
            body: json(params)
          }).then(function (res) {
            return res;
          });
        };

        return ApiClient;
      }()) || _class));

      _export('default', ApiClient);
    }
  };
});
//# sourceMappingURL=api.js.map
