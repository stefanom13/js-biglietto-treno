
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

        // 40% sconto se over 65
} else if ( userAge >= 65 ) {
  const priceOversixteen = priceTrip - ( ( 40 * priceTrip ) / 100 );
  console.log(priceOversixteen);

}


                                     
   
 
  
//  stampare prezzo finale con centesimi    

