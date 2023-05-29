
// FUNZIONE CHE CREA IL QUADRATINO ALL'INTERNO DEL DOM
function createSquare() {
    let square = document.createElement('div')
    square.classList.add('square')
    return square
}

console.log(createSquare())
// VARIABILE CHE INSERISCA LA GRIGLIA ALL' INTERNO DEL DOM
let button = document.getElementById('riproduci')

// EVENTLISTENER AL BUTTON PER RIPRODURRE AL SUO CLICK LA GRIGLIA CON I QUADRATINI
button.addEventListener('click', function() {

    let grid = document.getElementById('grid')

    // CICLO FOR INSERITO PER CICLARE I QUADRATINI
    for (i =0; i < 100 ; i++) {
        
        // VARIABILE CHE RIPRENDE LA FUNZIONE 
        let square = createSquare()
        // VARIABILE CHE INNIETTA GLI INDICI NUMERICI DEL CICLO ALL'INTERNO DEI QUADRATINI
        square.innerText = i + 1

        // ADDEVENTLISTENER ALLA CLASSE SQUARE PER FAR CAMBIARE E RIMUOVERE IL COLORE AI QUADRATINI
        square.addEventListener('click', function(){
            // FUNZIONI CHE AGGIUNGONO E TOLGONO LA CLASSE PER IL COLORE AI QUADRATINI('SQUARE') 
            this.classList.toggle('click-color')
            // console.log per riuscire a dare il numero esatto del quadratino in cui ci troviamo
            console.log(this.innerText)
            
        })
        // APPEND ALLA GRIGLIA PER INSERIRE AL SUO INTERNO LA CLASSE SQUARE CHE SAREBBERO I QUADRATINI
        grid.append(square)
        
        
}
    
})

