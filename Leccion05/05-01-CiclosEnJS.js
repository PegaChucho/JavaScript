let contador = 0;
let contador1 = 0;
let contador2 = 0;

while (contador <= 10) {
  if (contador % 2 != 0) {
    //numeros impares
    console.log(contador);
  }
  contador++;
}


// inicio:
// do {
//   if (contador1 % 2 != 0) {
//     continue inicio;
//   } else {
//     console.log(contador1);
//   }
//   contador1++;
// } while (contador1 <= 10);

inicio:
for (let contador1 = 0; contador1 <= 10; contador1++) {
    if (contador1 % 2 != 0) {
            continue inicio;
          } else {
            console.log(contador1);
          }
          contador1++;
    
}

for (let contador2 = 0; contador2 < 3; contador2++) {
  console.log(contador2);
}
