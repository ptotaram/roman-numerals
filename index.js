#!/usr/bin/env node
'use strict';

var numerals = require('./src/numerals');

if (process.argv.length !== 3) {
  throw new Error('There should be one argument containing a Roman numeral');
}

console.log(numerals.translateToArabic(process.argv[2]));
