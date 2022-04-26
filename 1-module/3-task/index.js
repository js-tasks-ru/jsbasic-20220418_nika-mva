function ucFirst(str) {
  // ваш код...
  if (!str) {
    return str;
  }
  const firstChar = str[0];
  const apperChar = firstChar.toUpperCase();
  const strTrim = str.slice(1);
  return apperChar + strTrim;
}
