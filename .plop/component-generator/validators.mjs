export function isNotPascalCase(value) {
  if (/^[a-z]/g.test(value)) return true;
  if (value.toLowerCase() === value) return true;
  if (value.toUpperCase() === value) return true;
  return false;
}

export function hasSpaces(value) {
  return /\s+/g.test(value);
}

export function hasNumbers(value) {
  return /\d/g.test(value);
}
