const dollars = ["32$", "15$", "34$", "23$", "10$"];

//Map => convertir una cosa en otra
let prices = [];

//Slice es una subcadena, y al subcadena que se
//quiere es todo menos el elemento signo dólar
for (let i = 0; i < dollars.length; i++) {
  prices[i] = dollars[i].slice(0, dollars[i].length - 1);
}

//Manera formal de hacer lo anterior
prices = [];

for (let dollar of dollars) {
  prices.push(Number(dollar.slice(0, dollar.length - 1)));
}

//Manera moderna de hacer lo anterior
//La función map() recibe una función
prices = dollars.map((dollar) => {
   return Number(dollar.slice(0, dollar.length - 1));
});

//Una manera sencilla de entender las funciones es "a mí me dan esto,
//entonces hago esto".

//Filter
let expensive = [];
for (let price of prices) {
  //Si el precio es mayor o igual a 20, se mete en la lista nueva
  //considerando que sea caro
  if (price >= 20) {
    expensive.push(price);
  }
}

expensive = prices.filter((price) => price >= 20);



//Reduce
//Como parámetros hay que pasarle un acumulador y un elemento del arreglo
let sum = 0;

sum = expensive.reduce((acum, price) => acum + price);

//Claining
sum = dollars
    .map(dollar => Number(dollar.slice(0, dollar.length -1)))
    .filter(price => price >= 20 )
    .reduce((acum, price) => acum + price)

//Forma manual de hacer lo anterior
sum = 0;
for (let dollar of dollars) {
    const price = Number(dollar.slice(0, dollar.length -1))
    if (price >= 20) {
        sum += price;
    }
}

//Cuando se mapea a objeto en una sola línea hay que poner
//paréntesis o si no se queja
prices.map(price => ({ price, currency: '$'})).forEach(obj => obj.price += 10)

