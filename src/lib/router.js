'use strict';

/**
 * Router module
 * @module router
 */

/**
 * A sample route iterator that simply puts the actual value into every callback function
 * @param {type} value The value that should be passed to the callbacks
 * @param {type} callbacks An array of callbacks
 */
const ROUTE_ITERATOR = (value, callbacks) => callbacks.map((callback) => callback(value));

/**
 * The router class that works like a router or pubsub
 */
class Router {
    /**
     * Constructor of the router.
     * @param {function} [routeIterator = ROUTE_ITERATOR] A function that takes a value and callbacks and will apply the value to the callbacks
     */
    constructor (routeIterator = ROUTE_ITERATOR) {
        if (typeof routeIterator !== 'function') {
            throw new Error('A router has to be initialized with a function.');
        }
        this.routes = new Map();
        this.routeIterator = routeIterator;
    }
    /**
     * A route subscribes with a callback function
     * @param {} route A route definition. This could be any type but will most likely be a string.
     * @param {function} func This is the callback for the current route
     * @returns {Set} A set of callbacks for the current route.
     */
    subscribe (route, func) {
        if (typeof func !== 'function') {
            throw new Error('Second parameter has to be a function.');
        }
        
        let subscriptions = this.routes.get(route);
        if (!subscriptions || !(subscriptions instanceof Set)) {
            subscriptions = new Set();
        }
        subscriptions.add(func);
        this.routes.set(route, subscriptions);
        return subscriptions;
    }
    /**
     * A route should be deleted. Both callback and route have to be provided.
     * @param {string} route The route that should be removed
     * @param {function} func The callback function of the route that should be removed.
     * @returns {Boolean} Indicates if something has been removed.
     */
    unsubscribe (route, func) {
        const subscriptions = this.routes.get(route);
        let done = false;
        if (subscriptions) {
            done = subscriptions.delete(func);
        }
        if (subscriptions.size === 0) {
            this.routes.delete(route);
        }
        return done;
    }
    /**
     * A value gets published for a specific route.
     * The route iterator from the constructor will be used here.
     * @param {} route The route that should receive the value.
     * @param {} value The value that should be passed to hte callbacks
     * @returns {any|null} It returns null if no route was found (or the route iterator returned null).
     */
    publish (route, value) {
        let subscriptions = this.routes.get(route);
        if (!subscriptions) {
            return null;
        }
        return this.routeIterator(value, Array.from(subscriptions));
    }
}

export default Router;