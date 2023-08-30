/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while */


// Creare una const con gli elementi della spesa.

const shoppingList = ['pane', 'pasta', 'olio', 'pomodori', 'sale'];

// Fare un while loop per elencare gli ingredienti.

let i = 0;

while ( i < shoppingList.length) {
    
    i++
    // Stampare la lista degli ingredienti
    
    let stampaEl = document.createElement('li')
    stampaEl.innerText = shoppingList[i - 1];
    document.querySelector('.stampa').appendChild(stampaEl);
    console.log(shoppingList[i - 1]);

}


