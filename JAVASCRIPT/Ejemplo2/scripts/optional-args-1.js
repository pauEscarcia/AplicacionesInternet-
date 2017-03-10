// Test by cutting/pasting in Firebug.

function convertString(numString, /* Optional */ base) {
  if (typeof base == "undefined") {
    base = 10;
  }
  var num = parseInt(numString, base);
  console.log("%s base %o equals %o base 10.",
              numString, base, num);
}

convertString("1010");
convertString("1010", 2);
convertString("2");
convertString("2", 16);