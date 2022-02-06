// inserire solo lettere 

const userName =prompt('Ciao, il tuo nome è? ');
console.log(userName)

// età passeggero
const userAge =parseInt( prompt ('Quanti hanni hai?'))
console.log(userAge)

// chiedere utente km vuole percorrere
const percorrenza =parseInt( prompt ('Quanti km vuoi percorrere?'))
console.log(percorrenza)

// calcolo prezzo biglietto

const priceTrip = percorrenza * 0.21;
console.log(priceTrip);



// adattiamo prezzo biglietto in base ad alcune richieste 
      // 20% sconto se minorenni
if (userAge <= 18 ) {
  const priceUndereighteen = priceTrip - ( ( 20 * priceTrip ) / 100 ); 
  console.log(priceUndereighteen);
  document.getElementById('sconto').innerHTML += `Fantastico ${userName},lei ha diritto ad uno sconto del 20%`;
  document.getElementById('prezzo').innerHTML += `Eccoci qua ${userName},come anticipato in precedenza lei ha diritto ad uno sconto del 20%,totale sarà:€${priceUndereighteen.toFixed(2)}`;

        // 40% sconto se over 65
} else if ( userAge >= 65 ) {
  const priceOversixteen = priceTrip - ( ( 40 * priceTrip ) / 100 );
  console.log(priceOversixteen);
  document.getElementById('sconto').innerHTML += `Fantastico ${userName},lei ha diritto ad uno sconto del 40%`;
  document.getElementById('prezzo').innerHTML += `Eccoci qua ${userName},come anticipato in precedenza lei ha diritto ad uno sconto del 40%,totale sarà:€${priceOversixteen.toFixed(2)}`;

  // stampo prezzo non scontato
} else {
    document.getElementById('sconto').innerHTML += `Mi dispace ${userName}, per lei non è presente alcuno sconto `;
    document.getElementById('prezzo').innerHTML += ` € ${priceTrip.toFixed(2)}.`;
  }
  