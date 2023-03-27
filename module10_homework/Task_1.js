someNumber = prompt('Please enter something');
sum = someNumber++;
if (typeof sum != 'number') {
  console.log ('Упс, кажется, вы ошиблись')
} else if (sum / 2) {
  console.log('Это четное число')
} else {
  console.log('Это нечетное число')
}