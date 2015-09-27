/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var rescale = require('rescale')(Decimal).rescale;
var tempDiff = require('linear-preset-factory')(require('../src/linear-presets-temperature-difference'));

function convert(x, preset) {
  return Number(rescale(preset[0], preset[1], x));
}

function invert(preset) {
  return preset.slice(0).reverse();
}

describe('temperature difference presets', function() {
  it('should convert correctly', function() {
    (138600).should.be.exactly(convert(138600, invert(tempDiff.celsius_celsius)), 'celsius_celsius')
      .and.exactly(convert(249480, invert(tempDiff.celsius_fahrenheit)), 'celsius_fahrenheit')
      .and.exactly(convert(138600, invert(tempDiff.celsius_kelvin)), 'celsius_kelvin')
      .and.exactly(convert(249480, invert(tempDiff.celsius_rankine)), 'celsius_rankine')
      .and.exactly(convert(-207900, invert(tempDiff.celsius_delisle)), 'celsius_delisle')
      .and.exactly(convert(45738, invert(tempDiff.celsius_newton)), 'celsius_newton')
      .and.exactly(convert(110880, invert(tempDiff.celsius_reaumur)), 'celsius_reaumur')
      .and.exactly(convert(72765, invert(tempDiff.celsius_romer)), 'celsius_romer');

    (0).should.be.exactly(convert(0, invert(tempDiff.celsius_celsius)), 'celsius_celsius')
      .and.exactly(convert(0, invert(tempDiff.celsius_fahrenheit)), 'celsius_fahrenheit')
      .and.exactly(convert(0, invert(tempDiff.celsius_kelvin)), 'celsius_kelvin')
      .and.exactly(convert(0, invert(tempDiff.celsius_rankine)), 'celsius_rankine')
      .and.exactly(convert(0, invert(tempDiff.celsius_delisle)), 'celsius_delisle')
      .and.exactly(convert(0, invert(tempDiff.celsius_newton)), 'celsius_newton')
      .and.exactly(convert(0, invert(tempDiff.celsius_reaumur)), 'celsius_reaumur')
      .and.exactly(convert(0, invert(tempDiff.celsius_romer)), 'celsius_romer');
  });
});
