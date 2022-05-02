function sumSalary(salaries) {
    let sumSalaries = 0;
    let values = Object.values(salaries);
    values.forEach(function(item){
    if(typeof item === "number" && !isNaN(item) && isFinite(item) ){
        sumSalaries = sumSalaries + item;
      }
  })
  return sumSalaries;
}
