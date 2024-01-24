let isAtivo = false;

console.log(isAtivo);

isAtivo = true;

console.log(isAtivo);

isAtivo = 1;

console.log(isAtivo);

console.log(!isAtivo); //false
console.log(!!isAtivo); //true

console.log(!!3); //true
console.log(!!-1); //true
console.log(!!' '); //true
console.log(!![]); //true
console.log(!!{}); //true
console.log(!!Infinity); //true
console.log(!!(isAtivo = true)); //true

console.log(!!0); //false
console.log(!!''); //false
console.log(!!null); //false
console.log(!!NaN); //false
console.log(!!undefined); //false
console.log(!!(isAtivo = false)); //false

console.log(!!('' || null || 0 || ' ')); //true

console.log(('' || null || 0 || 'epa')); //trás o primeiro ou único valor verdadeiro

let nome = '';

console.log(nome || 'Desconhecido');

nome = 'Thomás';

console.log(nome || 'Desconhecido!');