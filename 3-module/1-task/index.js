function namify(users) {

  const names = users.map(function(currentValue){
    return currentValue.name;
  })
  return names;
}
