 // map é um étodo javascript de iterar

 numbers = [1,2,3,4,3,4,5,5,55];

 n2 = [];

 // método array.of cria um array baseado nos parametros passados.
 n2 = Array.of(...numbers);
 console.log(n2)
console.log(...numbers + 'spreaad');

// reduce itera o array e soma todos os seus valores, guardando no acumulador
 let one = 0;
 let on = 10;
console.log(numbers.reduce((acumulator, current) => acumulator  + current, on));