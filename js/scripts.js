// Chiedo il nome all'utente 
const fname = prompt("Come ti chiami?");
console.log("L'utente si chiama: ", fname);

// Chiedo il cognome all'utente 

const lname = prompt("Qual è il tuo cognome?");
console.log("Il cognome dell'utente è: ", lname);

// Chiedo il colore preferito all'utente

const favcol = prompt("Qual è il tuo colore preferito?");
console.log("Il colore preferito dell'utente è: ", favcol);

// Generazione password

let somma = fname + lname + favcol + "21";
document.getElementById('my-password').innerHTML = somma;