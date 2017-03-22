'use strict';

System.register(['superagent', 'moment'], function (_export, _context) {
  "use strict";

  var superagent, moment, Account, ApiClient;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_superagent) {
      superagent = _superagent.default;
    }, function (_moment) {
      moment = _moment.default;
    }],
    execute: function () {
      _export('Account', Account = function () {
        function Account() {
          _classCallCheck(this, Account);
        }

        Account.prototype.setData = function setData(data) {
          Object.assign(this, data);
        };

        return Account;
      }());

      _export('Account', Account);

      _export('ApiClient', ApiClient = function () {
        function ApiClient() {
          _classCallCheck(this, ApiClient);

          this.cache = {};
        }

        ApiClient.prototype.saveCache = function saveCache(key, content) {
          this.cache[key] = {
            content: content,
            since: moment().unix()
          };
          return this;
        };

        ApiClient.prototype.getCache = function getCache(key, ttl) {
          if (!this.cache.hasOwnProperty(key)) return null;
          var item = this.cache[key];
          if (item.since < moment().unix() - ttl) {
            this.purgeCache(key);
            return null;
          }
          return item.content;
        };

        ApiClient.prototype.purgeCache = function purgeCache(key) {
          if (this.cache.hasOwnProperty(key)) {
            delete this.cache[key];
          }
        };

        ApiClient.prototype.purgeCaches = function purgeCaches(prefix) {
          for (var key in this.cache) {
            if (this.cache.hasOwnProperty(key) && key.lastIndexOf(prefix, 0) === 0) {
              delete this.cache[key];
            }
          }
        };

        ApiClient.prototype.get = function () {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(url, params, cacheKey) {
            var cacheTtl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 60;
            var content, res;
            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!cacheKey) {
                      _context2.next = 4;
                      break;
                    }

                    content = this.getCache(cacheKey, cacheTtl);

                    if (!content) {
                      _context2.next = 4;
                      break;
                    }

                    return _context2.abrupt('return', content);

                  case 4:
                    params = params || {};
                    if (this.token) params._token = this.token;
                    _context2.next = 8;
                    return new Promise(function (fulfilled, rejected) {
                      superagent.get(url).query(params).end(function (err, res) {
                        if (err) rejected(err);
                        fulfilled(res.body);
                      });
                    });

                  case 8:
                    res = _context2.sent;

                    if (cacheKey) {
                      this.saveCache(cacheKey, res);
                    }
                    return _context2.abrupt('return', res);

                  case 11:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee, this);
          }));

          function get(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
          }

          return get;
        }();

        ApiClient.prototype.post = function () {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(url, params, files) {
            var file_input, req, prop, i, res;
            return regeneratorRuntime.wrap(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    params = params || {};
                    if (this.token) params._token = this.token;
                    file_input = void 0;
                    req = superagent.post(url);

                    for (prop in params) {
                      if (params.hasOwnProperty(prop)) {
                        req.field(prop, params[prop]);
                      }
                    }

                    if (files) {
                      if (files.hasOwnProperty(length)) {
                        for (i = 0; i < files.length; i++) {
                          file_input = files[i];
                          req.attach(file_input.name, file_input.files[0], file_input.value);
                        }
                      } else {
                        file_input = files;
                        req.attach(file_input.name, file_input.files[0], file_input.value);
                      }
                    }
                    _context3.next = 8;
                    return new Promise(function (fulfilled, rejected) {
                      req.end(function (err, res) {
                        if (err) rejected(err);
                        fulfilled(res.body);
                      });
                    });

                  case 8:
                    res = _context3.sent;
                    return _context3.abrupt('return', res);

                  case 10:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee2, this);
          }));

          function post(_x5, _x6, _x7) {
            return _ref2.apply(this, arguments);
          }

          return post;
        }();

        return ApiClient;
      }());

      _export('ApiClient', ApiClient);
    }
  };
});
//# sourceMappingURL=api-facade.js.map
