function getRandomIntegerNumberFromRange (min, max) {
  if (min >= max || min < 0 || max < 0) {
    throw 'Некорректно задан диапазон';
  }
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

function getRandomNotIntegerNumberFromRange (min, max, simbolsNumberAfterComma) {
  if (min >= max || min < 0 || max < 0) {
    throw 'Некорректно задан диапазон';
  }
  return ((Math.random() * (max - min)) + min).toFixed(simbolsNumberAfterComma);
}
