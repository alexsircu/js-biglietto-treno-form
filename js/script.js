// Partendo dall'esercizio di due giorni fa, aggiungiamo una sezione (div) con i campi di input per chiedere all'utente nome-cognome, età (select) e numero di km da percorrere.
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)

// Prezzo calcolato
// Categoria selezionata dall'utente (offerta)
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

var generateTicket = document.getElementById("generate");
generateTicket.addEventListener('click',
 function() {
   var nameUser = document.getElementById("name").value;
   console.log(nameUser);
   // distanza in km
   var numberKm = document.getElementById("km").value;
   console.log(numberKm);
   // eta dell'utente
   var age = document.getElementById("age-range").value;
   console.log(age);
   // il prezzo del biglietto è definito in base ai km (0.21 € al km);
   var ticketPricePerKm = 0.21;

   var ticketPrice = (numberKm * ticketPricePerKm);
   ticketPrice = ticketPrice.toFixed(2);
   console.log("Il prezzo senza sconto è di: " + ticketPrice);


   var ticketPriceDiscount;

     if (age == "minorenne") {
       // va applicato uno sconto del 20% per i minorenni;
       ticketPriceDiscount = ticketPrice - ((ticketPrice * 20) / 100);
       ticketPriceDiscount = ticketPriceDiscount.toFixed(2);
       console.log("Il prezzo scontato é: " + ticketPriceDiscount);
       document.getElementById("price-ticket").innerHTML += ticketPriceDiscount;
     } else if (age == "over65") {
       // va applicato uno sconto del 40% per gli over 65.
       ticketPriceDiscount = ticketPrice - ((ticketPrice * 40) / 100);
       ticketPriceDiscount = ticketPriceDiscount.toFixed(2);
       console.log("Il prezzo scontato é: " + ticketPriceDiscount);
       document.getElementById("price-ticket").innerHTML += ticketPriceDiscount;
     } else {
        document.getElementById("price-ticket").innerHTML += ticketPrice;
     }

   // Numero carrozza (numero casuale tra 1 e 9)
   var carriageNumber = Math.floor(Math.random() * 9) + 1;
   console.log(carriageNumber);
   document.getElementById("carriage-number").innerHTML += carriageNumber;
   // Codice treno (numero casuale tra 90000 e 100000 escluso)
   var trainCode = Math.floor(Math.random() *10000) + 90000;
   console.log(trainCode);
   document.getElementById("trainCode").innerHTML += trainCode;

 }
);
