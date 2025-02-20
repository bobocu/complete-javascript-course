/*******************************
 * Variables and data types
 /*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
*/


/**************************************
 * Variable mutation and type coercion
 *

 var firstName = 'John';
 var age = 28;

 // Type coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' 
 + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' 
 + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/


/***************************************
 * Basic operators
 *
 
 var year, yearJohn, yearMark;
 now = 2018;
 ageJohn = 28;
 ageMark = 33;

 //Math operators
 yearJohn = now - ageJohn;
 yearMark = now - ageMark;
 
 console.log(yearJohn);
 
 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

 //Logical operators
 var johnOlder = ageJohn < ageMark;
 console.log(johnOlder);


 //typeof operator
 console.log(typeof johnOlder);
 console.log(typeof ageJohn);
 console.log(typeof 'Mark is older than John');
 var x;
 console.log(typeof x);
*/


/**
 * Operator precedence
 *

 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 // Multiple operators
 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);
 
 // Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 // Multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6; 
 console.log(x, y);

 // More operators
 x *= 2;
 console.log(x);
 x += 10;
 console.log(x);
 x--;
 console.log(x);
*/




 /**
  * CODING CHALLENGE 1
  *

  var markWeight = 88;
  var markHeight = 1.87;
  var johnWeight = 95
  var johnHeight = 1.90;

  var markBmi = markWeight / (markHeight*markHeight);
  var johnBmi = johnWeight / (johnHeight*johnHeight);
  console.log(markBmi, johnBmi);

  var hasMarkHigherBmi = markBmi > johnBmi;
  console.log('Is Mark\'s BMI higher than John\'s? ' + hasMarkHigherBmi);
*/


/**
 * 
 *
 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === true) {
    console.log(firstName + ' is married!');
 } else {
    console.log(firstName + ' will hopefully marry soon :)');
 }

 var isMarried = false;
 if (isMarried) {
    console.log(firstName + ' is married!');
 } else {
    console.log(firstName + ' will hopefully marry soon :)');
 }

 var markWeight = 88;
 var markHeight = 1.87;
 var johnWeight = 95
 var johnHeight = 1.90;

 var markBmi = markWeight / (markHeight*markHeight);
 var johnBmi = johnWeight / (johnHeight*johnHeight);
 
 if (markBmi > johnBmi) {
    console.log('Mark\'s BMI is higher than John\'s.');
 } else {
    console.log('John\'s BMI is higher than Mark\'s.');
 }

*/


/**************************************
 * Boolean logic
 *

 var firstName = 'John';
 var age = 16;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 }else if(age >= 13 && age <  20 ){
     console.log(firstName + ' is a teenager.');
 }else if( age >= 20 && age < 30 ){
     console.log(firstName + ' is a young man.');
 } else{
    console.log(firstName + ' is a man.');
 }
*/



/****************************************
 * The Ternary Operator and Switch Statements
 *

 var firstName = 'John';
 var age = 19;

 age >= 18 ? console.log(firstName + ' drinks beer.') 
 : console.log(firstName + ' drinks juice.');

 var drink = age >= 18 ? 'beer' : 'juice';
 console.log(drink);

 // Switch statement
 var job = 'teacher';
 switch (job) {
     case 'teacher':
     case 'instructor':
         console.log(firstName + ' teaches kids how to code.');
         break;
     case 'driver':
         console.log(firstName + ' drives an uber in Lisbon.');
         break;
     case 'designer':
         console.log(firstName + ' designes beautiful websites');
         break;
     default:
         console.log(firstName + ' does something else.');
 }

 age = 10;
 switch (true){
     case age < 13:
         console.log(firstName + ' is a boy.');
         break;
     case age >= 14 && age < 20:
         console.log(firstName + ' is a teenager.');
         break;
     case age >=20 && age < 30:
         console.log(firstName + ' is a young man.');
         break;
     default:
         console.log(firstName + ' is a man.');
 }
*/

/****************************
 * Truthy and Falsy values and equality operators


 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

 var height;

 height = 23;
 if(height || height === 0){
     console.log('Variable is defined');
 } else{
     console.log('Variable has NOT been defined');
 }

 //Equality operators
 if (height == '23'){
     console.log('The == operator does type coercion!');
 }

*/




/**************************************
 * CODING CHALLENGE 2
 *

 var johnsTeam = [ 89, 120, 103 ];
 var mikesTeam = [ 116, 94, 123 ];
 var marysTeam = [ 97, 134, 105 ];
 var johnsTeamSum = 0, mikesTeamSum = 0, marysTeamSum = 0;

 for(i in johnsTeam){
     johnsTeamSum += johnsTeam[i];
     mikesTeamSum += mikesTeam[i];
     marysTeamSum += marysTeam[i];
 }

 var johnsTeamAvg = johnsTeamSum / 3;
 var mikesTeamAvg = mikesTeamSum / 3;
 var marysTeamAvg = marysTeamSum / 3;
 console.log(johnsTeamAvg, mikesTeamAvg, marysTeamAvg);
 
 switch (true){
     case marysTeamAvg > mikesTeamAvg && marysTeamAvg > johnsTeamAvg:
         console.log('Mary\'s Team wins.'); break;
     case johnsTeamAvg > mikesTeamAvg && johnsTeamAvg > marysTeamAvg:
         console.log('Johns Team wins.'); break;
     case mikesTeamAvg > johnsTeamAvg && mikesTeamAvg > marysTeamAvg:
         console.log('Mikes Team wins.'); break;
     default:
         console.log('It\'s a draw.')
 }

 */

/*******************
 * Functions
 *

 function calculateAge(birthYear) {
    return 2018 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);

 function yearsUntilRetirement(year, firstName){
     var age = calculateAge(year);
     var retirement = 65 - age;
     if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
     } else {
         console.log(firstName + ' is already retired.');
     }
 }

 yearsUntilRetirement(1990, 'John');
 yearsUntilRetirement(1948, 'Mike');
 yearsUntilRetirement(1969, 'Jane');

 */

 /*******************
  * Function Statements and Expressions
  *

  // Function declaration
  // function whatDoYouDo(job, firstName) {}

  // Function expression
  var whatDoYouDo = function(job, firstName){
      switch(job) {
          case 'teacher':
              return firstName + ' teaches kids how to code';
          case 'driver':
              return firstName + ' drives a cab in Lisbon';
          case 'designer':
              return firstName + ' designs beautiful websites';
          default:
              return firstName + ' does something else';
        }
  }

  console.log(whatDoYouDo('teacher', 'John'));
  console.log(whatDoYouDo('designer', 'Jane'));
  console.log(whatDoYouDo('retired', 'Mark'));

  */

  /*************************
   * Arrays
   *

   // Initialize new array
   var names = ['John', 'Mark', 'Jane'];
   var years = new Array(1990, 1969, 1948);

   console.log(names[2]);
   console.log(names.length);

   // Mutate array data
   names[1] = 'Ben';
   names[names.length] = 'Mary';   
   console.log(names);

   // Different data types
   var john = ['John', 'Smith', 1990, 'teacher', false];
   
   john.push('blue');
   john.unshift('Mr.');
   console.log(john);

   john.pop();
   john.pop();
   john.shift();
   console.log(john);

   console.log(john.indexOf(1990));

   var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' :
    'John IS a designer';
   console.log(isDesigner);

   */

   /***********
    * 
    * 

   var bills = [124, 48, 268];
   
   var tipCalculator = function(bill){
       var percentage;
       if ( bill > 0 && bill < 50){
           percentage = .2;
       } else if (bill >= 50 && bill < 200){
           percentage = .15;
       } else {
           percentage = .1;
       }
       return percentage * bill;
    }

    var tips = [];
    var finalPayment = [];
    for(i in bills){
        tips.push(tipCalculator(bills[i]));
        finalPayment.push(tips[i] + bills[i]);
    }
    console.log(bills, tips, finalPayment);
    
    */

 /*****************************
  * Objects and properties
  *

  // Object literal
  var john = {
      firstName: 'John',
      lastName: 'Smith',
      birthYear: 1990,
      family: ['Jane', 'Mark', 'Bob', 'Emily'],
      job: 'teacher',
      isMarried: false
  };
  console.log(john.firstName);
  console.log(john['lastName']);
  var x = 'birthYear';
  console.log(john[x]);

  john.job = 'designer';
  john['isMarried'] = true;
  console.log(john);

  // new Object syntax
  var jane = new Object();
  jane.firstName = 'Jane';
  jane.birhtYear = 1969;
  jane['lastName'] = 'Smith';
  console.log(jane);

  */

  /**************************
   * Objects and methods
   *
  var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);

*/

/*****************************
 * Coding Challenge
 *

 var john = {
     fullName: 'John Doe',
     mass: 86,
     height: 1.87,
     calcBMI: function(){
         this.bmi = this.mass / (this.height * this.height);
         return this.bmi;
     }
 }

 var mark = {
     fullName: 'Mark Weber',
     mass: 90,
     height: 1.98,
     calcBMI: function(){
         this.bmi = this.mass / (this.height * this.height);
         return this.bmi;
     }
 }

 switch(true){
    case mark.calcBMI() > john.calcBMI():
        console.log(mark.fullName + ' has a higher BMI of: ' + mark.bmi);
        break;
    case john.bmi > mark.bmi:
        console.log(john.fullName + ' has a higher BMI of: ' + john.bmi);
        break;
    default: 
        console.log('Both have the sami BMI');
 }
*/

/******************************
 * Loops and iteration
 *
 
 for (var i = 1; i < 20; i+=2){
     console.log(i);
 }
 // For loop
 
 for (var i = 0; i < john.length ; i++){
    console.log(john[i]);
 }

 // While loop
 var i = 0;
 while(i < john.length){
     console.log(john[i]);
     i++;
 }
 *
 // continue and break statements
 var john = ['John', 'Smith', 1990, 'designer', false];
 
 for (var i = 0; i < john.length ; i++){
     if (typeof john[i] !== 'string') continue;
     console.log(john[i]);
 }

 for (var i = 0; i < john.length ; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length -1; i >= 0; i--){
    console.log(john[i]);
}

*/

/***********************
 * CODING CHALLENGE
 */

 var john = {
     name: 'John',
     bills: [124, 48, 268, 180, 42],
     calculateTip: function(){
         this.tips = []
         this.finalAmount = []
        for(var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            if( bill < 100 ){
                percentage = .2;
            } else if( bill >= 100 && bill < 300){
                percentage = .15;
            } else if( bill > 300){
                percentage = .25;
            }
            this.tips.push(percentage * bill);
            this.finalAmount.push(this.tips[i]+bill);
        }
        this.averageTips = _calculateAverage(this.tips);
        return this.tips, this.finalAmount;
     }
 };

 var mark = {
     name: 'Mark',
     bills: [77, 375, 110, 45],
     calculateTip: function(){
        this.tips = []
        this.finalAmount = []
       for(var i = 0; i < this.bills.length; i++){
           var percentage;
           var bill = this.bills[i];
            if ( bill < 50 ){
                percentage = .2;
            } else if ( bill >= 50 && bill < 200 ){
                percentage = .15;
            } else {
                percentage = .1;
            }
           this.tips.push(percentage * bill);
           this.finalAmount.push(this.tips[i]+ bill);
       }
       this.averageTips = _calculateAverage(this.tips);
       return this.tips, this.finalAmount;
    }
 };

 mark.calculateTip();
 mark.average = _calculateAverage(mark.tips);
 john.calculateTip();
 john.average = _calculateAverage(john.tips);

 console.log(mark);
 console.log(john);

 if(mark.averageTips > john.averageTips){
     console.log('Mark\'s family is spending more tips on average: '+ mark.averageTips);
 }else if(john.averageTips > mark.averageTips){
     console.log('John\'s family is spending more tips on average: '+ john.averageTips);
 }else{
     console.log('Both families are spending the same amount of tips.');
 }

 function _calculateAverage(arr){
    var currentSum = 0; 
    for (var i = 0; i < arr.length; i++){
        currentSum += arr[i];
    }
    return currentSum / arr.length;
 }






















