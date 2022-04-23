function factorial(n) {
    let result = 1;
  for(let i = 1; i<=n; i++){
    result  = i*result;
  }
  return result;
}

function example() {
    // for(let i = 0; i < 3; i++) {
    //     console.log(i);
    // }
    let i = 0;
    if (i < 3) {
        console.log(i);
    }
    i++;
    if (i < 3) {
        console.log(i);
    }
    i++;
    if (i < 3) {
        console.log(i);
    }
    i++;
    if (i < 3) {
        console.log(i);
    }
}