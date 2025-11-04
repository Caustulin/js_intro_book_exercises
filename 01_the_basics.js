// Exercise 01

const name  = 'Calita ' + 'Ustulin';
console.log(name);

// Exercise 02

let num = 4936;
let onesNum = num % 10;
console.log(`Ones place is ${onesNum}.`);

num = (num - onesNum) / 10;
let tensNum = num % 10;
console.log(`Tens place is ${tensNum}.`);

num = (num - tensNum) / 10;
let hundredsNum = num % 10;
console.log(`Hundreds place is ${hundredsNum}.`);

num = (num - hundredsNum) / 10;
let thousands = num;
console.log(`Thousands place is ${thousands}.`);


// Exercise 03

  // 'true' => String
    console.log(typeof 'true');

  // false         => Boolean
    console.log(typeof false);

  // 1.5 => Number
    console.log(typeof 1.5);

  // 2 => Number
    console.log(typeof 2);

  // undefined => Undefined
    console.log(typeof undefined);

  // {foo: 'bar'} => Object
    console.log(typeof {foo: 'bar'});


// Exercise 04 

console.log('5' + 10);
/* It logs '510' instead of 15 because because in JS + expressions with strings 
always results in a string. It's a property called Implicit coercion. The Number 10
is coerced to a String and then concatenated with '5', resulting in '510'.
*/


// Exercise 05 

console.log(Number('5') + 10);
console.log(parseInt('5', 10) + 10);


// Exercise 06

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);


// Exercise 07

let foo = ['a', 'b', 'c'];
console.log(foo.length);
console.log(foo[3]); // there won't be an error, but it will return undefined as index 3 doesn't exist in the given array.


// Exercise 08 

const names = ['Xadrez', 'Midna', 'Messi', 'Pudim', 'Cacau'];
console.log(names);


// Exercise 09

const pets = {
  xadrez: 'cat',
  midna: 'cat',
  messi: 'dog',
  pudim: 'cat',
  cacau: 'cat',
}

console.log(pets);


// Exercise 10

let test = 'foo' === 'Foo'; // Will evaluate to false, because it is case sensitive;
console.log(test);


// Exercise 11

console.log(parseInt('3.1415')); 
// It will evaluate to 3. When parseInt() encounters a non-digit it stops converting.

console.log(parseFloat('3.1415'));
// It will return 3.1415. 


// Exercise 12

console.log('12' < '9');
/*  the expression evaluates as true since
 the operands are strings, not numbers. When you compare two strings, 
 JavaScript performs a character-by-character comparison going from left 
 to right (like in a dictionary), so on the first comparison, it determines that '1' < '9', so '12' 
 must be less than '9'.'
*/
