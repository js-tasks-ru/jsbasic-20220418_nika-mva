function checkSpam(str) {
  let LowerCaseString = str.toLowerCase(); 

  
  if (LowerCaseString.indexOf('1xbet') !== -1 || LowerCaseString.indexOf('xxx') !== -1) {
    return true;
   
  }
  
  return false;
}
