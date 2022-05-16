function getMinMax(str) {
  let arr = str.split(' ');
  let finalArr = arr.map(function(item){
    return parseFloat(item);
  }).filter(function(item){
    if(isNaN(item)){
      return false;
    }
    return true;
  }).sort((a, b) => a - b);
  let min = finalArr[0];
  let max = finalArr[finalArr.length - 1];
  return {min: min, max: max};
} 
