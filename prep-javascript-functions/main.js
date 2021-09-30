function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(5);

console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

var hello = getGreeting('Dave');

console.log('hello', hello);

function addAndMultiplyBy5(num1, num2) {
  var multiple = num1 + num2;
  return multiple * 5;
}

var addAnswer = addAndMultiplyBy5(5, 4);

console.log('addAnswer', addAnswer);

function multiplyAndDivideBy5(num1, num2) {
  var multiple = num1 * num2;
  return multiple / 5;
}

var multiDiv = multiplyAndDivideBy5(5, 6);

console.log('multiDiv', multiDiv);

function subtractTwo(num1, num2) {
  return num1 - num2;
}

var subT = subtractTwo(9, 7);

console.log('subT', subT);

function getCircleCircumference(radius) {
  return Math.PI * 2 * radius;
}

var bigCircle = getCircleCircumference(9000);

console.log('bigCircle', bigCircle);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var leeroyJenkins = getFullName('Leeroy', 'Jenkins');

console.log('leeroyJenkins', leeroyJenkins);

function cube(num) {
  return num * num * num;
}

var iceCube = cube(9);

console.log('iceCube', iceCube);
