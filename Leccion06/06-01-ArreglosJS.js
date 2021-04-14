//let autos = new Array("Honda", "Toyota", "Nissan");

const autos = ["Honda", "Toyota", "Nissan"];
console.log(autos);

console.log(autos[0]);

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}

autos[1] = "Acura";
autos.push("Infinity");

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}

autos[autos.length] = "Lexus";

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}

console.log(Array.isArray(autos));