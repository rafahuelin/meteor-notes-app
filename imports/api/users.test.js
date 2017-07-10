import expect from 'expect';

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

    expect(res).toBe(20);
  });

  it('should double a single number', function () {
    const res = add(44);

    expect(res).toBe(88);
  });
});

describe('square', function () {
  it('should square a number', function () {
    const res = square(5);

    expect(res).toBe(25);
  });
});