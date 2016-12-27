'use strict';
var numerals = require('../src/numerals');
var test = require('unit.js');

describe('Numerals Module', function () {
  describe('translateToArabic', function () {
    it('should return 1954 for MCMLIV', function (done) {
      test.value(numerals.translateToArabic('MCMLIV')).is(1954);
      done();
    });

    it('should return 1 for I', function (done) {
      test.value(numerals.translateToArabic('I')).is(1);
      done();
    });

    it('should return 100 for C', function (done) {
      test.value(numerals.translateToArabic('C')).is(100);
      done();
    });

    it('should return 4 for IV', function (done) {
      test.value(numerals.translateToArabic('IV')).is(4);
      done();
    });

    it('should return 9 for IX', function (done) {
      test.value(numerals.translateToArabic('IX')).is(9);
      done();
    });

    it('should return 40 for XL', function (done) {
      test.value(numerals.translateToArabic('XL')).is(40);
      done();
    });

    it('should return 90 for XC', function (done) {
      test.value(numerals.translateToArabic('XC')).is(90);
      done();
    });

    it('should return 600 for DC', function (done) {
      test.value(numerals.translateToArabic('DC')).is(600);
      done();
    });

    it('should return 1988 for MCMLXXXVIII', function (done) {
      test.value(numerals.translateToArabic('MCMLXXXVIII')).is(1988);
      done();
    });

    it('should return 3999 for MMMCMXCIX', function (done) {
      test.value(numerals.translateToArabic('MMMCMXCIX')).is(3999);
      done();
    });

    it('should throw an error if an invalid character is used', function (done) {
      test.assert.throws(function () {
        numerals.translateToArabic('MPMXCIX')
      }, Error);
      done();
    });
  });
});