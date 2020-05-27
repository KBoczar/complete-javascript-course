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

/*
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


/********************
* coding challange 2
*/


var mikeScore = [10, 10, 10];
var johnScore = [10, 10, 10];
var marryScore = [1, 1, 1];
var sum = 0;
var sum2 = 0;
var sum3 = 0;
 
for (var i =0; i < mikeScore.length; i++){
    sum = sum + mikeScore[i];
    var avre = sum / mikeScore.length;
   }

for (i = 0; i < johnScore.length; i++){
   sum2 = sum2 + johnScore[i];
    var avre2 = sum2 / johnScore.length;
}

for (i = 0; i < marryScore.length; i++){
    sum3 = sum3 + marryScore[i];
     var avre3 = sum3 / marryScore.length;
 }

if( avre > avre2 && avre > avre3){
console.log('Mike tem wins');
} else if (avre2 > avre && avre2 > avre3) {
    console.log('John team wins');
}else if (avre3 > avre && avre3 > avre2){
    console.log('Mary team wins');
}else  {
    console.log('There is a draw');
};

console.log(avre, avre2, avre3);

