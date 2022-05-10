function filterRange(arr, a, b) {
  const result = arr.filter(function callbackFn(element){
    if (element >= a && element <= b){
      return true;
    } else {
      return false;
    }
  });
  return result;
}

