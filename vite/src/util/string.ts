export function getSafeNumber(numberString: string): string {
  const num = Number(numberString);
  if (isNaN(num)) {
    return "";
  }
  return String(num);
}

export function defaultStringSort(a: string, b: string) {
  return a < b ? -1 : a > b ? 1 : 0;
}
