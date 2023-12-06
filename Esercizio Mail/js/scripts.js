/*
---ESERCIZIO MAIL
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.

---STEPS
Inserire input che prende il dato dell'utente                 OK
Creare un array che include le mail che possono accedere      OK
Fare la verifica SE l'utente con la sua mail può accedere     OK
Stampare l'esito della verifica in pagina                     OK
*/

const userEmail = document.getElementById('user-email');
const myButton = document.getElementById('special-button');

const accessEmails = ["alessiovietri@boolean.com", "mauroformisano@boolean.com", "marcocaggiano@boolean.com"];

myButton.addEventListener('click', function(){
    const emailInput = (userEmail.value); 
    console.log("L'utente ha inserito: " + emailInput);

    if ((emailInput == accessEmails[0]) || (emailInput == accessEmails[1]) || (emailInput == accessEmails[2])){
        console.log('sei dentro');
        document.getElementById('my-result').innerHTML = 'Sei Dentro!';
    }
    else{
        alert ('ENTRA?! Non penso proprio.');
    }
})

