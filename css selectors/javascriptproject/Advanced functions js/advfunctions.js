const first = () => {

  const greet = "hi";
  const second = () => {
    alert(greet);
  }

 return second;

}

const newfunc = first();
newfunc();

// currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

const sum = (a, b) => a + b;
const curriedAdd = (a) => (b) => a + b;
const addBy5 = curriedAdd(5);

const subtract = (a, b) => a - b;
const curriedSub = (a) => (b) => a - b;
const subBy5 = curriedSub(5);

// composing

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);

const compose = (f,g) => (a) => f(g(a));
const mul1 = (num) => num * 1;
const mul2 = (num) => num * 5;
compose(mul1, mul2)(10);



