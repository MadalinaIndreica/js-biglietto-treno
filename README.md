###ES. BIGLIETTO DEL TRENO
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
* il prezzo del biglietto è definito in base ai km (0.21 € al km)
* va applicato uno sconto del 20% per i minorenni
* va applicato uno sconto del 40% per gli over 65.
### Soluzione
**Dati**
1. Chiedere all'utente il numero di km
2. Chiedere all'utente la sua età

**Logica**
1. calcolare il prezzo del biglietto in base al numero di km e l'età dell'utente
2. 
SE userAge < 18
    applicare sconto del 20% al calcolo del prezzo
ELSE IF userAge > 65
    applicare sconto del 40% al calcolo del prezzo
ELSE 
    calcolare il prezzo solo in base al numero di km

3. preparare il messaggio del risultato 

**Output**
Stampo il risultato nella pagina