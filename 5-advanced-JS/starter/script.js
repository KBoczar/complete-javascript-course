/*// Function constructor

var John = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};

var Person = function(name, yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;


var john = new Person('John', 1990, 'teacher');
john.calculateAge();


Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth)
};

//Primitives vs objects

var a = 23;
var b = a;
a = 46;



var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);




var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;

obj1.age = 30;


*/

var yaers = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {

    var arrRes = [];
    for (var i = 0; i < arr.length; i++ ) {

        arrRes.push(fn(arr[i]));

    }

    return arrRes;

}

function calculateAge(el) {

    return 2020 - el;
}

var ages = arrayCalc(yaers, calculateAge);
console.log(ages);




function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer'){

            console.log(name + ' , can you please explain what UX design is?');

        }else if (job === 'teacher') {

            console.log('What subject do you teach, ' + name + '?');

        }else {

            console.log('Hello' + name + ', what do you do?');

        }
    }
}

interviewQuestion('teacher')('John');


// Bind, call and apply 


var john = {

    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentelmen ! I\'m ' + 
            this.name + 'I\'m a ' + 
            this.job + ' and I\'m ' + 
            this.age + ' years old');
        }else if (style === 'friendly'){
            console.log('Hey! What\'s up ? I\'m ' + this.name + 
            ', I\'m a ' + this.job + 
            ' and I\'m ' + this.age + 
            ' years old . Have a nice ' + 
            timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);


var johnFriendly = 
john.presentation.bind(john, 'friendly');

johnFriendly('morning');


// Coding chellange

(function(){

    function Question(question, answers, correct) {

        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = 
    function() {
        console.log(this.question)
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    
    }
    
    Question.prototype.checkAnswer = 
    function(ans) {
        if (ans === this.correct) {
    
            console.log('Correct answer');
        }else {
            console.log('Wrong answer')
        }
    }
    var q1 = new Question('Is JavaScript the coolest programing language in the world?', 
                                                                ['Yes', 'No'],
                                                                0);
    var q2 = new Question('What is the name of this course\'s teacher ?',
                                                                ['John',
                                                                'Michael',
                                                                'Jonas'],
                                                                2);
    var q3 = new Question('What does best describe coding?',
                                                                ['Boring',
                                                                'Hard',
                                                                'Fun',
                                                                'Tediuos'],
                                                                2);
    
    
                                                                
    function nextQuestion() {
        
        var questions = [q1, q2, q3];

        var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    
    var answer = prompt('Please select the correct ansfer.');
    
    questions[n].checkAnswer(answer);

    nextQuestion();

    if(answer !== 'exit') {

        questions[n].checkAnswer(parseInt(answer));

        nextQuestion(); 
    }

    }
    
    nextQuestion();



})();






