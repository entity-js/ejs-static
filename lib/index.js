/**
 *  ______   __   __   ______  __   ______  __  __
 * /\  ___\ /\ "-.\ \ /\__  _\/\ \ /\__  _\/\ \_\ \
 * \ \  __\ \ \ \-.  \\/_/\ \/\ \ \\/_/\ \/\ \____ \
 *  \ \_____\\ \_\\"\_\  \ \_\ \ \_\  \ \_\ \/\_____\
 *   \/_____/ \/_/ \/_/   \/_/  \/_/   \/_/  \/_____/
 *                                         __   ______
 *                                        /\ \ /\  ___\
 *                                       _\_\ \\ \___  \
 *                                      /\_____\\/\_____\
 *                                      \/_____/ \/_____/
 */

/**
 * A utility to store data globally.
 *
 * @author Orgun109uk <orgun109uk@gmail.com>
 *
 * @module ejs
 * @submodule Static
 */

var _static;

if (global._ejsStatic === undefined) {
  global._ejsStatic = {};
}

_static = module.exports = function (name, def) {
  'use strict';

  if (def !== undefined && global._ejsStatic[name] === undefined) {
    global._ejsStatic[name] = def;
  }

  return {
    /**
     * Get the value of the static data.
     *
     * @method get
     * @return {Mixed} The stored value, or null.
     */
    get: function () {
      return global._ejsStatic[name] || null;
    },

    /**
     * Sets the stored value.
     *
     * @method set
     * @return {Object} Returns self.
     * @chainable
     */
    set: function (value) {
      global._ejsStatic[name] = value;
      return _static;
    },

    /**
     * Determines if the static value exists.
     *
     * @method has
     * @return {Boolean} Returns true or false.
     */
    has: function () {
      return global._ejsStatic[name] !== undefined;
    },

    /**
     * Deletes the stored value.
     *
     * @method del
     * @return {Object} Returns self.
     * @chainable
     */
    del: function () {
      delete global._ejsStatic[name];
      return _static;
    }
  };
};
