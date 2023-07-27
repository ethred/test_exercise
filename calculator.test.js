const { add, subtract, multiply, divide } = require('./calculator');

// Testing the add function
describe('add function', () => 
{
  it('adds 2 numbers', () => 
  {
    expect(add(1, 2)).toBe(3);
  });

  it('adds 3 numbers', () => 
  {
    expect(add(1, 2, 3)).toBe(6);
  });

  it('adds 6 numbers', () => 
  {
    expect(add(1, 2, 3, 5, 6, 10)).toBe(27);
  });
});

// Testing the subtract function
describe('subtract function', () => 
{
  it('returns negative number for subtracting from lower number', () => 
  {
    expect(subtract(1, 2)).toBe(-1);
  });

  it('returns positive for subtracting from higher number', () => 
  {
    expect(subtract(2, 1)).toBe(1);
  });

  it('returns NaN when one argument is a string', () => 
  {
    expect(subtract('sww', 2)).toBe(NaN);
  });

// Testing the multiple function
  describe('multiple function', () => 
  {
    it('multiples 2 numbers', () => 
    {
      expect(multiply(2, 3)).toBe(6);
    });

    it('multiples 5 numbers', () => 
    {
      expect(multiply(1, 2, 3, 4, 5)).toBe(120);
    });

    it('multiples 3 numbers', () => 
    {
      expect(multiply(1, 2, 3)).toBe(6);
    });
  });

// Testing the divide function
  describe('divide function', () => 
  {
      test('correctly divides two numbers', () => 
      {
        expect(divide(21, 3)).toBe(7);
      });

      test('returns Not-A-Number if one of the arguments is a string', () => 
      {
        expect(divide('str', 2)).toBe(NaN);
      });

      test('returns 0 when zero is the numerator', () =>
      {
        expect(divide(0, 2)).toBe(0);
      });
    });
});