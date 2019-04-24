export default function hasValue(val) {
  if (val === null || val === undefined || val === '') {
    return false;
  }
  return true;
}
