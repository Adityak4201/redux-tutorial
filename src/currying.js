function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(1)(2)); //3

//Using Arrow Function
const add2 = (a) => (b) => a + b;
