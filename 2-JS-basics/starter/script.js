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



 /************************
  * Arrays
  */

  var names = ['John', 'Mark', 'Jane'];
  var years = new Array(1990, 1969, 1948);

  console.log(names[0]);
  console.log(names[0].length);


  /**********************
   *  Coding chellange 3
   */

   function tipCalculator(bill){
       var percentage;
       if (bill < 50){
           percentage = .2;
       } else if (bill >=50 && bill < 200){
           percentage = .15;
       }else{
           percentage = .1;
       }
       return percentage * bill;
   }
   var bills = [124, 48,  268];
   var tips = [tipCalculator(bills[0]),
               tipCalculator(bills[1]),
               tipCalculator(bills[2])];

    var finalValues = [bills[0] + tips[0],
                       bills[1] + tips[1],
                       bills[2] + tips[2]];    
   
                     
   console.log(tips, finalValues);

   /****************************
    * Objects & properties
    */

    var john = {
        firstName: 'John',
        lastName: 'Smith',
        birthYear: 1990,
        family: ['Jane', 'Mark', 'Bob', 'Emily'],
        job: 'teacher',
        isMarried: false
    };

    console.log(john.firstName, john.lastName, john.birthYear);

    /****************************
     * Coding chellange 4
     */

     var john = {
         fullName: 'John Smith',
         mass: 192,
         heigh: 1.95,
         calcBMI: function(){
             this.bmi = this.mass / (this.heigh * this.heigh);
             return this.bmi;
         }
     };

     var mark = {
        fullName: 'Mark Smith',
        mass: 78,
        heigh: 1.69,
        calcBMI: function(){
            this.bmi = this.mass / (this.heigh * this.heigh);
            return this.bmi;
        }
    };
    john.calcBMI();
    mark.calcBMI();

    if (john.bmi > mark.bmi){
        console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
    }else if (mark.bmi > john.bmi){
        console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
    }else {
        console.log('They have the same BMI');
    };


/*****************************
 * Loops & iteration
 */

 var john = ['John', 'Smith', 1990, 'designer', false];
 for (var i = 0; i < john.length; i++) {
     console.log(john[i]);
 }

/******************************
 *  Coding chellange 5
 */

 var john = {
    fullName: 'John Smith',
    bills:[124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips =[];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++){

            // Determinate percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 50){
                percentage = .2;
            }else if (bill >= 50 && bill < 200){
                percentage = .15;
            }else{
                percentage = .1;
            }

            //Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
 }

 var mark = {
    fullName: 'Mark Miller',
    bills:[77, 475, 110, 45],
    calcTips: function(){
        this.tips =[];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++){

            // Determinate percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 100){
                percentage = .2;
            }else if (bill >= 100 && bill < 300){
                percentage = .1;
            }else{
                percentage = .25;
            }

            //Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
 }

 function calcAverage(tips){
     var sum = 0;
     for (var i = 0; i < tips.length; i++){
         sum = sum +tips[i];
     }
     return sum / tips.length;
 }

 john.calcTips();
 mark.calcTips();
 console.log(john, mark);
 john.average = calcAverage(john.tips);
 mark.average = calcAverage(mark.tips);
 if (john.average > mark.average){
     console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
 }else if (mark.average > john.average){
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
 }