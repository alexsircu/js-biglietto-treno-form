// Partendo dall'esercizio di due giorni fa, aggiungiamo una sezione (div) con i campi di input per chiedere all'utente nome-cognome, età (select) e numero di km da percorrere.
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9)
// Prezzo calcolato
// Categoria selezionata dall'utente (offerta)
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

var generateTicket = document.getElementById("generate");
generateTicket.addEventListener('click',
 function() {
   var nameUser = document.getElementById("name").value;
   console.log(nameUser);
   // distanza in km
   var kmDistance = document.getElementById("km").value;
   console.log(kmDistance);
   // eta dell'utente
   var age = document.getElementById("age-range").value;
   console.log(age);

 }
);
