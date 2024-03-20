const exsistedUserLogin = 'best_user_login'; 
const exsistedUserPassword = '12345678';
const userLogin = prompt('Введите логин').trim();
const userPassword = prompt('Введите пароль').trim();
if (userLogin === exsistedUserLogin && userPassword === exsistedUserPassword){
    alert('Добропожаловать ${userLogin}!');
}else{
    alert('Неверный логин или пароль');
}