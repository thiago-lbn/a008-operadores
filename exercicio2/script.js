const num1 = prompt("insira um numero")
const num2 = prompt("insira o segundo numero")
let resultado

resultado = num1 < num2
console.log("o primeiro numero e igual o segundo", resultado)

resultado = num1 = num2
console.log("O primeiro numero é igual ao segundo?", resultado)

resultado = num1 %= num2
console.log("O primeiro numero é divisível pelo segundo?", resultado)

resultado = num2 % num1
console.log("O segundo numero é divisível pelo primeiro?", resultado)