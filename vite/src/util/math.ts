export function isNegativeZero(zero: number): boolean {
  const isZero = zero === 0;
  const isNegative = (1 /zero) < 0;
  return isNegative && isZero;
}

export function get2FixedNumber(value: number) {
  return parseFloat(value.toFixed(2));
}

export function getRandomInt(
  min: number = 0,
  max: number = Number.MAX_SAFE_INTEGER
) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}
