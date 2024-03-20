let userString = prompt('Введите текст для обрезки').trim();
let startSliceIndex = +prompt('Введите индекс, с которого начать обрезку').trim();
let endSliceIndex = +prompt('Введите индекс, который закончит обрезку').trim();
userString = userString.slice(startSliceIndex, endSliceIndex);
alert('Результат: ${userString}');