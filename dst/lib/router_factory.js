'use strict';

/**
 * Router factory module
 * @module router_factory
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A factory function that creates a new Router instance
 * @param {function} routeIterator A function that iterates on callbacks of a route.
 * @returns {module:router~Router} An instance of a router
 */
exports.default = function (routeIterator) {
  return new _router2.default(routeIterator);
};