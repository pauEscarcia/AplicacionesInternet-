function sumNumbers(x, y, extraParams) {
  var result = x + y;
  if (isDefined(extraParams)) {
    if (isTrue(extraParams.logInput)) {
      console.log("Input: x=%s, y=%s", x, y);
    }
    if (isDefined(extraParams.extraOperation)) {
      result = extraParams.extraOperation(result);
    }
  }
  return(result)
}

function isDefined(value) {
  return(typeof value != "undefined");
}

// You don't really need the isDefined part, because it is legal
// to compare an undefined value to true

function isTrue(value) {
  return(isDefined(value) && (value == true))
}