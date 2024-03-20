let myinfoText = 'Всем привет! Меня зовут, ${MyName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяц. Я уверен, что пройду данный курс до конца!';
const language = 'JAVASCRIPT';
myinfoText = myinfoText.replaceAll(language, language.toUpperCase());
cosole.log(myinfoText);
console.log(myinfoText.length);
console.log(myinfoText[0], myinfoText[myinfoText.length - 1]);