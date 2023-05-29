PROBLEMA: L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

1- Impostare la struttura del DOM inserendo un container che conterrà la griglia('grid')
2- Inseriamo all' interno del file javascript la function che conterra le istruzioni per inserire la classe square che rappresenterà il quadratino all'interno del DOM
3- Inseriamo un button che riprodurrà ad ogni suo click la griglia tramite l' addEventListener e inseriamo al suo interno:
    3.1- All'interno dell'evento inseriamo la variabile grid che inserirà all'interno del DOM la griglia
    3.2- Inseriamo il ciclo for da 0 a 100 e ci riprendiamo la function che avevamo inserito precedentemente al suo interno
    3.3- Inseriamo un ulteriore addEventListener alla classe 'square' che rappresenta i quadratini sfruttando la proprietà 'toggle' che ci permetterà di aggioungere e rimuovere la classe che nello svolgimento dell' evento gli dara uno sfondo di colore diverso.
4- Inseriamo all'interno del ciclo la proprieta innerText con i suoi relativi valori che inseriranno all'interno dei quadratini i loro specifici indici numerici relativi al ciclo.
5- Fine esercizio base.
