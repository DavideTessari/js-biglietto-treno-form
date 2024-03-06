// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 



// Quando l'utente clicca sul bottone dobbiamo leggere i valori delle input
const generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', function () {
    
    // const userNameInput = document.querySelector('#user-name');
    const userName = document.querySelector('#user-name').value;
    const lastName = document.querySelector('#user-lastname').value;
    const userColor = document.querySelector('#user-color').value;
    
    // concatenare le 3 informazioni e concatenare anche il 23
    const password = userName + lastName + userColor + '23';

    // stamparlo nel div con id user-message
    const userMessageDiv = document.querySelector('.user-message');
    userMessageDiv.innerHTML = 'La tua password è: ' + password;
    userMessageDiv.classList.add('active');
});

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function() {
    document.querySelector('#user-name').value = '';
    document.querySelector('#user-lastname').value = '';
    document.querySelector('#user-color').value = '';

    const userMessageDiv = document.querySelector('.user-message');
    userMessageDiv.innerHTML = '';
    userMessageDiv.classList.remove('active');
});