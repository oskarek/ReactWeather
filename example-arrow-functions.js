var names = ['Oskar', 'Peter', 'David', 'Sara'];

function add (a, b) {
  return a + b;
};

var addStatement = (a, b) => {
  return a + b;
};

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));
console.log(addStatement(1, 3));
console.log(addStatement(9, 0));
console.log(addExpression(1, 3));
console.log(addExpression(9, 0));
