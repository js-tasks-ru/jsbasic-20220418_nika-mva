function camelize(str) {
  function ucFirst(str) {
    
    if (!str) {
      return str;
    }
    const firstChar = str[0];
    const apperChar = firstChar.toUpperCase();
    const strTrim = str.slice(1);
    return apperChar + strTrim;
  }

  let name = str.split('-');
  let arr = name.map(function(currentValue, index){
    if (index === 0){
      return currentValue;
    }
    return ucFirst(currentValue);
  })
  let result = arr.join('');
  return result;
}
