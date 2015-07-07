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

var test = require('unit.js');

var ejsStatic;

describe('ejs/static', function () {

  'use strict';

  beforeEach(function () {

    ejsStatic = require('../lib');

  });

  afterEach(function () {

    delete require.cache[require.resolve('../lib')];

  });

  describe('ejs/static[cleared-tests]', function () {

    afterEach(function () {

      delete global._ejsStatic;

    });

    describe('Static.get()', function () {

      it('shouldReturnNullIfUndefinedAndNoDefault', function () {

        test.value(
          ejsStatic('test').get()
        ).isNull();

      });

      it('shouldReturnTheDefaultValueIfUndefined', function () {

        test.bool(
          ejsStatic('test', true).get()
        ).isTrue();

        test.bool(
          global._ejsStatic.test
        ).isTrue();

      });

      it('shouldReturnTheStoredValueIfDefined', function () {

        global._ejsStatic.test = true;

        test.bool(
          ejsStatic('test').get()
        ).isTrue();

      });

    });

    describe('Static.set()', function () {

      it('shouldSetTheGlobalValue', function () {

        test.value(
          global._ejsStatic.test
        ).isUndefined();

        ejsStatic('test').set(true);

        test.bool(
          global._ejsStatic.test
        ).isTrue();

      });

      it('shouldUpdateTheDefinedValue', function () {

        global._ejsStatic.test = false;

        ejsStatic('test').set(true);

        test.bool(
          global._ejsStatic.test
        ).isTrue();

      });

    });

    describe('Static.has()', function () {

      it('shouldReturnFalseIfUndefined', function () {

        test.bool(
          ejsStatic('test').has()
        ).isNotTrue();

      });

      it('shouldReturnTrueIfDefaultProvided', function () {

        test.bool(
          ejsStatic('test', true).has()
        ).isTrue();

      });

      it('shouldReturnTrueIfDefined', function () {

        global._ejsStatic.test = true;

        test.bool(
          ejsStatic('test').has()
        ).isTrue();

      });

    });

    describe('Static.del()', function () {

      it('shouldDeleteTheDefinedValue', function () {

        global._ejsStatic.test = true;

        ejsStatic('test').del();

        test.value(
          global._ejsStatic.test
        ).isUndefined();

      });

    });

  });

  describe('ejs/static[uncleared-tests]', function () {

    it('initializeTheGlobalPriorToCleaningCache', function () {

      test.value(
        ejsStatic('test').get()
      ).isNull();

      test.bool(
        ejsStatic('test').has()
      ).isNotTrue();

      test.bool(
        ejsStatic('test', true).get()
      ).isTrue();

      test.bool(
        ejsStatic('test').has()
      ).isTrue();

    });

    it('staticShouldStillBeDefined', function () {

      test.bool(
        ejsStatic('test').get()
      ).isTrue();

      test.bool(
        ejsStatic('test').has()
      ).isTrue();

    });

  });

});
