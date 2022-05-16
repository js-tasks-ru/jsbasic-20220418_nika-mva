function showSalary(users, age) {
  return users.filter(function(user){
    if(user.age <= age){
      return true;
    }
  }).map(function(user){
    return user.name + ', ' + user.balance;
  }).join('\n')
}
