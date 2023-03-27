let arr = [2,6,12];
let result = arr.map(function(item, index, array) {
  return item + 4
});
console.log(arr);
console.log(result);
console.log(arr.length);
console.log(Array.isArray(arr));