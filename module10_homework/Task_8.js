let countries = new Map();
countries.set("Russia", "cold");
countries.set("Egypt", "hot");
countries.set("France", "warm");

for (let name of countries.keys()) {
  console.log(name);
}

for (let weather of countries.values()) {
  console.log(weather); 
}
countries.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});