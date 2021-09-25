var person = {
  firstName: 'Matt',
  lastName: 'Powers',
  hobby: 'Exercising'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'Daydreaming';
console.log(person.job);

person.previousJob = 'Corporate Drone';
console.log(person.previousJob);

console.log(person);
