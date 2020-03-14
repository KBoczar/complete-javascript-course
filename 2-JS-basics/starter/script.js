var firstName = 'John';
var lastName = 'Smith';
var age = 28;
var fullAge = true;
if(age === 28){
    fullAge = true;
    
}else fullAge = false;
var job;
job = 'Teacher'
console.log(firstName, lastName, age, fullAge, job);

var year = 2020;
var yearJohn = year - 28;
var yearMark = year - 33;
console.log(yearJohn, yearMark);

/****************************************
* Operator precedence
*/

var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge);


/********************
* coding challange 1
*/


var massJohn, heightJohn, massMark, heightMark,bmiJohn, bmiMark, isBmiMarkHigher;
massJohn = prompt('podaj masę Johna w kg');
heightJohn = prompt('podaj wzrost Johna w cm')/100;
massMark = prompt('podaj masę Marka w kg');
heightMark = prompt('podaj wzrost Marka w cm')/100;

bmiJohn = massJohn / Math.pow(heightJohn, 2);
bmiMark = massMark / Math.pow(heightMark, 2);
isBmiMarkHigher = bmiMark > bmiJohn;
if(bmiMark > bmiJohn){
    console.log('BMI Marka jest wyższe',isBmiMarkHigher)
}else if (bmiMark = bmiJohn){
    console.log('BMI Marka i Johna są takie same', isBmiMarkHigher)
}else console.log('BMI Johna jest Wyższe', isBmiMarkHigher)
