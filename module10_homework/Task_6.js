let arr = [1,2,3,4,5];
let theTask = true;
for (let i = 0; i < arr.length - 1; i++) {
  for (let u = i + 1; u < arr.length; u++) {
     if (typeof(arr[i]) !== typeof(arr[u])) {
         theTask = false
     }
  }
}
if (theTask) {
    console.log("It\'s true");
} else {
    console.log("It\'s false");
}