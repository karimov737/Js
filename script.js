// Запрашиваем у пользователя имя и возраст
var name = prompt("Your Name:");
var age = prompt("Age:");


var results = [];

// Function to check the user's answer
function checkAnswer(expression, userAnswer, correctAnswer) {
    return {
        expression: expression,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer
    };
}

//Storing expressions and answers
var ex1 = 14 + 23;
results.push(checkAnswer('ex 1 : 14 + 23', +prompt('14 + 23 = '), ex1));

var ex2 = 14 + 53;
results.push(checkAnswer('ex 2 : 14 + 53', +prompt('14 + 53 = '), ex2));

var ex3 = 54 + 43;
results.push(checkAnswer('ex 3 : 54 + 43', +prompt('54 + 43 = '), ex3));

var ex4 = 17 + 33;
results.push(checkAnswer('ex 4 : 17 + 33', +prompt('77 - 33 = '), ex4));

var ex5 = 9 - 23;
results.push(checkAnswer('ex 5 : 9 - 23', +prompt('9 - 23 = '), ex5));

var ex6 = 7 - 23;
results.push(checkAnswer('ex 6 : 7 - 23', +prompt('7 - 23 = '), ex6));

var ex7 = 24 * 13;
results.push(checkAnswer('ex 7 : 24 * 13', +prompt('24 * 13 = '), ex7));

var ex8 = 64 * 33;
results.push(checkAnswer('ex 8 : 64 * 33', +prompt('64 * 33 = '), ex8));

var ex9 = 14 * 3;
results.push(checkAnswer('ex 9 : 14 * 3', +prompt('14 * 3 = '), ex9));

var ex10 = 19 / 3;
results.push(checkAnswer('ex 10 : 19 / 3', +prompt('19 / 3 = '), ex10));

var ex11 = 18 / 3;
results.push(checkAnswer('ex 11 : 18 / 3', +prompt('18 / 3 = '), ex11));

var ex12 = 100 / 3;
results.push(checkAnswer('ex 12 : 100 / 3', +prompt('100 / 3 = '), ex12));

var ex13 = 10 % 4;
results.push(checkAnswer('ex 13 : 10 % 4', +prompt('10 % 4 = '), ex13));

var ex14 = 170 / 8;
results.push(checkAnswer('ex 14 : 170 % 8', +prompt('170 % 8 = '), ex14));

var ex15 = 84 % 3;
results.push(checkAnswer('ex 15 : 84 % 3', +prompt('84 % 3 = '), ex15));


// Looping through the results array
results.forEach(function(result) {
    console.log(result.expression + ' = ' + result.userAnswer + ' User`s Answer' +', Correct Answer: ' + result.correctAnswer);
});


