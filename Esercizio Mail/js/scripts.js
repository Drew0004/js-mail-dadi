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

let myResult = 'Email non valida'

myButton.addEventListener('click', function(){
    const emailInput = (userEmail.value); 
    console.log("L'utente ha inserito: " + emailInput);

    for (let i = 0; i < accessEmails.length; i++){
        
        if (emailInput == accessEmails[i]){
            console.log('sei dentro');
            myResult = 'Sei Dentro!';

        }
    }    
    
    document.getElementById('my-result').innerHTML = myResult;
})

