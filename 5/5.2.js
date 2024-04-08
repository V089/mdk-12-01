let correctAnswer = 0;
let incorrectAnswer = 0;

const question1 = +prompt("Сколько будет 2 + 2?");
const answer1 = 4;

if(question1 === answer1){
    correctAnswer++;
    alert('Ответ верный');
}else{
    incorrectAnswer++;
    alert('Ответ неверный');
}

const question2 = +prompt("Сколько будет 2 * 2?");
const answer2 = 4;

if(question2 === answer2){
    correctAnswer++;
    alert('Ответ верный');
}else{
    incorrectAnswer++;
    alert('Ответ неверный');
}

const question3 = +prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?");
const answer3 = 1;

if(question3 === answer3){
    correctAnswer++;
    alert('Ответ верный');
}else{
    incorrectAnswer++;
    alert('Ответ неверный');
}

const question4 = +prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше 5 конфет. Сколько в итоге конфет осталось у Маши?");
const answer4 = 12;

if(question4 === answer4){
    correctAnswer++;
    alert('Ответ верный');
}else{
    incorrectAnswer++;
    alert('Ответ неверный');
}

const question5 = +prompt("Сколько будет 2 + 2 * 2?");
const answer5 = 6;

if(question5 === answer5){
    correctAnswer++;
    alert('Ответ верный');
}else{
    incorrectAnswer++;
    alert('Ответ неверный');
}

alert(`Конец теста! Правильных ответов - ${correctAnswers}; Неправильных ответов - ${incorrectAnswers}.`);