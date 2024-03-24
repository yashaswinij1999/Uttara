function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "is leapyear";
  } else {
    return "not leapyear";
  }
}

console.log(isLeapYear(2000));
