/*jshint node:true, mocha:true */

'use strict';

require('should');

var rescale = require('rescale')(require('floating-adapter')).rescale;
var tempDiff = require('../src/linear-presets-temperature-difference');

function convert(x, preset) {
  return rescale(x, preset[0], preset[1]);
};

function invert(preset) {
  return preset.slice(0).reverse();
};

describe('temperature difference presets', function() {
  it('should convert correctly', function() {
    (138600).should.be.exactly(convert(249480, invert(tempDiff.celsiusToFahrenheit)), 'celsiusToFahrenheit')
      .and.exactly(convert(138600, invert(tempDiff.celsiusToKelvin)), 'celsiusToKelvin')
      .and.exactly(convert(249480, invert(tempDiff.celsiusToRankine)), 'celsiusToRankine')
      .and.exactly(convert(-207900, invert(tempDiff.celsiusToDelisle)), 'celsiusToDelisle')
      .and.exactly(convert(45738, invert(tempDiff.celsiusToNewton)), 'celsiusToNewton')
      .and.exactly(convert(110880, invert(tempDiff.celsiusToReaumur)), 'celsiusToReaumur')
      .and.exactly(convert(72765, invert(tempDiff.celsiusToRomer)), 'celsiusToRomer');

    (0).should.be.exactly(convert(0, invert(tempDiff.celsiusToFahrenheit)), 'celsiusToFahrenheit')
      .and.exactly(convert(0, invert(tempDiff.celsiusToKelvin)), 'celsiusToKelvin')
      .and.exactly(convert(0, invert(tempDiff.celsiusToRankine)), 'celsiusToRankine')
      .and.exactly(convert(0, invert(tempDiff.celsiusToDelisle)), 'celsiusToDelisle')
      .and.exactly(convert(0, invert(tempDiff.celsiusToNewton)), 'celsiusToNewton')
      .and.exactly(convert(0, invert(tempDiff.celsiusToReaumur)), 'celsiusToReaumur')
      .and.exactly(convert(0, invert(tempDiff.celsiusToRomer)), 'celsiusToRomer');
  });
});
