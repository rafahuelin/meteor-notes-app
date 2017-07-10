const add = (a, b) => {
  if (typeof b !== 'number') {
    return a + a;
  }

  return a + b;
};

const square = (a) => a * a;

describe('add', function () {
  it('should add two numbers', function () {
    const res = add(11, 9);

    if (res !== 20) {
      throw new Error('Sum was not equal to expeted value');
    }
  });

  it('should double a single number', function () {
    const res = add(44);

    if (res !== 88) {
      throw new Error('Number was not doubled.');
    }
  });
});

describe('square', function () {
  it('should square a number', function () {
    const res = square(5);

    if (res !== 25) {
      throw new Error('Number was not squared');
    }
  });
});