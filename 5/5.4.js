let i = 0;
while (i < 3) {
  let newStudent = prompt("Введите имя нового студента!");
  newStudent = newStudent.trim();
  if (newStudent) {
  }
  alert("Добро пожаловать, ${newStudent}!");
  i++;
}

let i1 = 0;
do {
  let newStudent = prompt("Введите имя нового студента!");
  newStudent = newStudent.trim();
  if (newStudent) {
  }
  alert("Добро пожаловать, ${newStudent}!");
  i1++;
} while (i1 < 3);