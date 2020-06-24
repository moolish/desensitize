export function isFit(value) {
  if (value === undefined || value === '' || typeof value === 'object') {
    return false;
  }
  return true;
}
