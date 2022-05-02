function truncate(str, maxlength) {
  if (str.length > maxlength) {
    const test1 = str.substring(0, maxlength - 1) + "…";
    return test1;
  } else {
    return str;
  }
}
