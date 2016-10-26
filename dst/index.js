'use strict';

/**
 * A proxy module that aggregates submodules
 * @module index
 * @author Markus Neuy
 * @since 25.10.2016
 * @see module:router_factory
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router_factory = require('./lib/router_factory');

var _router_factory2 = _interopRequireDefault(_router_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 
 */
exports.default = _router_factory2.default;