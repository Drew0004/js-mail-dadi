/*
---Esercizio dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

STEPS
Creare due dadi, uno per il player uno per il computer                  OK
Generare randomicamente un numero da uno a 6 per entrambi i dadi        OK
Verificare il vincitore in base al punteggio più alto                   OK
*/

let playerDice = document.getElementById('player-result');
let cpuDice = document.getElementById('cpu-result');

let myButton = document.getElementById('dice-button');

myButton.addEventListener('click', function(){
    playerDice = Math.floor(Math.random() * (6 - 1 +1) +1);
    console.log('player '+playerDice);
    cpuDice = Math.floor(Math.random() * (6 - 1 +1) +1);
    console.log('cpu '+cpuDice);

    if(playerDice == cpuDice){
        console.log('Parità');

    }
    else if (playerDice > cpuDice){
        console.log ("L'utente ha vinto!");
    }

    else if (playerDice < cpuDice){
        console.log("Il computer ha vinto!");
    }
})