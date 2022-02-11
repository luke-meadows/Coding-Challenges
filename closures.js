const add = (x) => {
  return function (y) {
    return x + y;
  };
};

const addToFive = add(5);
const addToOneMillion = add(1000000);

console.log(addToFive(10));
console.log(addToOneMillion(5));
