// Praca domowa 1 all
/
//1 Rok przestepny
let years = [1974, 1900, 1985, 2000];
let year;
for (let i = 0; i < years.length; i++) {
  year = years[i];

  if ((year % 100 === 0 || year % 4 === 0) && year % 400 !== 0) {
    console.log(year+"r. jest rokiem przystepnym.");
  }
}

//2 Silnia
let i=1;
let result =1;
while(i<=7){
    result = result * i;
    i++;
}
console.log("Silnia z 7 wynosi: " +result+ ".");

//3 Sprawdzanie nieparzystych
let tab = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
 
for (let i = 0; i < tab.length; i += 1) {
    if (tab[i] % 2 != 0)  {
 
     
 
        sum += tab[i];
    }
}
    console.log("Suma nieparzystych liczb z tablicy to:" ,sum+ ".");

//4 najwyzsza i najnizsza wartosc z tabeli
let tab = [1,2,3,4,5,6,7,8,9,10];

let min = Math.min(...tab);
let max = Math.max(...tab);

console.log("Najwieksza wartosc w tabeli to: " +max+ ".");
console.log("Najnizsza wartosc w tabeli to: " +min+ ".");

//5 najdluzszy string
let tab = ["Karol", "Adam","Rogowski","Politechnika","Super","Weekend"];

let sortownia = tab.sort((a, b) => b.length - a.length);


const str = 'Suma liter najdluzszego wyrazu wynosi: ' +sortownia[0].length+ ', a dokładniej chodzi o słowo ' + "\"" +sortownia[0]+ "\".";



console.log(str);

//6 wybierz wszystkie najwieksze wartosci
let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
let max = Math.max(...tab);



for (let i = 0; i < tab.length; i += 1 ) {  //można też zapisać i ++
    if (tab[i] === max)  {
 
        console.log(max);
    }
}

let count = 0;
for(let k = 0; k < tab.length; k ++){       //można też zapisać k += 1
    if(tab[k] === max)
        count++;}

console.log("Najwieksza wartoscia w zbiorze jest "+max+ " i wystepuje w nim " +count+ " razy.");

//7 Średnia parzystych
let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
let licznik = 0;
let sum = 0;
 
for (let i = 0; i < tab.length; i += 1) {
    if (tab[i] % 2 === 0)  {

        sum += tab[i];
        licznik += 1;
    }
}
let srednia = sum/licznik;

    console.log("Suma parzystych liczb z tablicy to" ,sum+", tablica zawiera " +licznik+ " liczb parzystych.");
    console.log("");
    console.log("Srednia arytmetyczna wszystkich parzystych liczb w tabeli wynosi " +srednia+ ".");

//8 Średnia wartość parzystych indeksow
let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
let licznik = 0;
let sum = 0;

for (let i = 2; i < tab.length; i += 2) {

        sum += tab[i];
        licznik += 1;
    
}

let srednia = sum/licznik;

    console.log("Suma liczb o parzystym indeksie w tabeli, zakladajac, ze zero nie jest parzyste, wynosi" ,sum+", tablica zawiera " +licznik+ " liczb o parzystym indeksie.");
    console.log("");
    console.log("Srednia arytmetyczna wszystkich liczb o parzystym indeksie w tabeli wynosi " +srednia+ ".");

//9 Dodawanie parzystych, odejmowanie nieparzystych

let tab = [1,6,23,8,4,98,3,7,3,98,4,98];


let sum = 0;


 
for (let i = 0; i < tab.length; i += 1) {
    if (tab[i] % 2 != 0)  {
 
     
 
        sum -= tab[i]; //ewentualnie moglbym dodac 1 glowny operator, ktory zlicza sumy z dodawania i odejmowania 
    }
    else if (tab[i] % 2 === 0)  

        sum += tab[i];
   
    }




console.log("Na skutek dodawania liczb parzystych i odejmowania liczb nieparzystych z tabeli uzyskano " +sum+ ".");

//koniec
