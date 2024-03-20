let userName = prompt('Как вас зовут?');
let userAge = prompt('Сколько вам лет?');
userName = userName.toLowerCase();
userName = userName.trim();
userAge = userAge.trim();
console.log(typeof userAge);
alert('Ваше имя ${userName}, ваш возраст ${useAge}');
