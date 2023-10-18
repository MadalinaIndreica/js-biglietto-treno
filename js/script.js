// DATI
const userKm = parseInt(prompt("ciao utente! quanti km vuoi percorrere?"));
const userAge = parseInt(prompt("quanti anni hai?"))
console.log(userKm, userAge);
// LOGICA
const calc = userKm * 0.21;
console.log(calc);
let result = "";

if (userAge < 18) {
 // sconto del 20%;
 result = calc * 0.8;
} else if (userAge > 65) {
//sconto del 40%
    result = calc * 0.6;
} else if (userAge > 18 && userAge < 65){
//nessuno sconto
    result = calc;
}

console.log(result);
result = result.toFixed(2);
const message = `il prezzo della tua tratta è ${result} € `;
// OUTPUT
document.getElementById("price").innerHTML = message;