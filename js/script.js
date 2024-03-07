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

    const nameLastname = userName;

    // stamparlo nel p con id user-message
    const userMessageP = document.querySelector('#user-message');
    userMessageP.innerHTML = nameLastname;
    userMessageP.classList.add('active');

    const userKm = parseInt(document.querySelector('#user-km').value);
    const userAge = document.querySelector('#user-age').value;
    // Il prezzo del biglietto è definito in base ai km (0.21 € al km)
    let userPrice = userKm * 0.21;

    // Applico uno sconto del 20% per i minorenni, applico uno sconto del 40% per gli over 65.
    let price = userPrice;
    if (userAge < 18) {
        price = price - (price * 20 / 100);
        const userSales = document.querySelector('#user-sales');
        userSales.innerHTML = "Hai ottenuto il 20% di sconto 👌";
        userSales.classList.add('active');
    } else if (userAge > 65) {
        price = price - (price * 40 / 100);
        const userSales = document.querySelector('#user-sales');
        userSales.innerHTML = "Hai ottenuto il 40% di sconto 👌";
        userSales.classList.add('active');
    };

    // Stampo il risultato (2 decimali)
    const userMessage = document.querySelector('#user-price');
    const priceFixed = price.toFixed(2);
    userMessage.innerHTML = priceFixed;
    userMessage.classList.add('active');
});

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function() {
    document.querySelector('#user-name').value = '';
    document.querySelector('#user-km').value = '';
    document.querySelector('#user-age').value = '';

    const userMessage = document.querySelector('#user-message');
    userMessage.innerHTML = '';
    userMessage.classList.remove('active');
});