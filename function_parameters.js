// const x = (x, y) => {
//   console.log(x + y);
// };

// x(3, 4);

// const function_parameters = (x, y = 5) => {
//   return x * y;
// };

// console.log(function_parameters(3, 7));
// const function_parameters = (x, y = 5) => {
//   x = x * 5;
//   y = y * 2;
//   return x * y;
// };

// const m = 5;
// const n = 3;

// // console.log(function_parameters(3, 7));
// console.log(function_parameters(m, n));
const function_parameters = (x, y = 5) => {
  x = x.two = 10;
  y = y * 2;
  return x * y;
};

const m = {
  one: 5,
  two: 3,
};
const n = 3;

// console.log(function_parameters(3, 7));
console.log(function_parameters(m, n));

console.log(m);
