// #1 Write  the if  statement by using a condition  that  if the age of person is greater than or equals to 18 it returns ‘You are an adult ‘
// If the age of the person  is less than 18 it returns ‘You are not an adult’.  

var person = 17;

if (person >= 18) {
    console.log('You are an adult' );   
}
else{
    console.log('You are not an adult');
}


// #2 Write the if else statement by using a condition that if a number is even it  returns ‘number is even’  else return ‘number is odd’.

var number = 19;
if (number % 2 == 0) {
    console.log('number is even');
} 
else  {
    console.log('number is odd');
}


// #3 Initialize an  array by the name of the game. Add any of the five names to it.  Print the array member one by one .

var games = [ 
    "mario",
    "freefire",
    "ballpool",  
    "callofduty",
    "ludo",
]
console.log(games);


// #4 Make an object and name it as cities and give it keys and values. Now access the first and fourth value of the respective object and print their values. 


var obj1 = { city:'karachi' }
var obj2 = { city:'islamabad' }
var obj3 = { city:'lahore' }
var obj4 = { city:'quetta' }
var obj5 = { city:'multan' }

console.log(obj1, obj4);


// #5 Write a program which prints your age by using string concatenation. 

var age = 34;
console.log('My age is ' + age);


// #6 Write a program that defines a string ‘JavaScript and assigns  a value to the string's length property ,returning the original  string and the length of the original string.

var str = 'helloworld';
var string = str;
console.log(string.length);