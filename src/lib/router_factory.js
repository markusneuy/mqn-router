'use strict';

/**
 * Router factory module
 * @module router_factory
 */


import Router from './router';


/**
 * A factory function that creates a new Router instance
 * @param {function} routeIterator A function that iterates on callbacks of a route.
 * @returns {module:router~Router} An instance of a router
 */
export default (routeIterator) => new Router(routeIterator);