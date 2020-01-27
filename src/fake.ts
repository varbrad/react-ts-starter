export const fakeCalculate = (a: number, b: number, c = false): number => {
  if (c) return 0;
  if (a > 20) {
    return a;
  }
  return a * b;
};
