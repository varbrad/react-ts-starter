import { fakeCalculate } from '../fake';

describe('App', (): void => {
  it('should produce a good result', () => {
    expect(fakeCalculate(2, 4)).toEqual(8);
  });

  it('should produce the right value', () => {
    expect(fakeCalculate(5, 22)).toEqual(22 * 5);
  });

  it('should return 50 if a > 20', () => {
    expect(fakeCalculate(40, 22)).toEqual(40);
  });

  it('should return mult if a is 20', () => {
    expect(fakeCalculate(20, 3)).toEqual(60);
  });

  it('will return 0 if c is false', () => {
    expect(fakeCalculate(38, 29, true)).toEqual(0);
  });
});
