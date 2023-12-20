let userName = prompt("Введите ваше имя");
let userAge = Number(prompt("Введите ваш возраст"));

console.log(`Пользователь ${userName}, ${userAge} лет`);

document.getElementById("username").innerText = userName; 
document.getElementById("age").innerText = userAge;

let examples = [
  {
    id: 'exp1', 
    question: '6 + 3 = ',
    answer: 9
  },
  {
    id: 'exp2', 
    question: '10 - 5 = ',
    answer: 5
  },
  {
    id: 'exp3', 
    question: '2 * 4 = ',
    answer: 8
  },
  {
    id: 'exp4', 
    question: '20 / 5 = ',
    answer: 4
  },
  {
    id: 'exp5', 
    question: '7 % 2 = ',
    answer: 3.5
  }
];



examples.forEach(example => {

    // Запрашиваем ответ пользователя    
    const userAnswer = prompt(example.question);
  
    // Формируем сообщение для консоли
    const message = `Вопрос: ${example.question} Правильный ответ: ${example.answer} (Ваш ответ: ${userAnswer})`; 
    
    // Выводим в консоль
    console.log(message);
    
  });
  
  // Уведомляем пользователя
  alert('Посмотрите примеры и ваши ответы в консоли браузера!');


// EX 2.

// получаем значения от пользователя
let x = Number(prompt("Введите число X"));
let y = Number(prompt("Введите число Y")); 

// приводим к числу
x = Number(x);
y = Number(y);

// вычисляем среднее арифметическое
let z = (x + y) / 2;

// выводим результат  
alert("Среднее арифметическое чисел " + x + " и " + y + " равно " + z);
document.getElementById("xyz").innerText = z; 
     