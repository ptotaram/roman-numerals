'use strict';
var legend = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
var combos = {'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900};

exports.translateToArabic = function (roman) {
  validateInput(roman);
  var sum = 0;
  for (let i = 0; i < roman.length; i++) {
    let combo = roman.charAt(i)+roman.charAt(i+1);
    if (Object.keys(combos).indexOf(combo) !== -1) {
      sum += combos[combo];
      i++;
    } else{
      sum += legend[roman.charAt(i)]
    }
  }
  return sum;
}

function validateInput (roman) {
  roman.split("").forEach(function (character) {
    if (Object.keys(legend).indexOf(character) === -1) {
      throw new Error('Input contains invalid character');
    }
  });
}