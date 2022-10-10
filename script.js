
// функция показывания / скрытия мнимых вычислений
function complex_visibility() {
    var imagi = document.getElementById("num_or_complex"); //что выбрал пользователь: обычное число или комплексное
    if(imagi.value == "1") {        // если выбрал обычное число
        //document.getElementById("change").innerHTML = "Показать мнимую часть";
        document.getElementById("complex").value = 0;        // зануление мнимой части во избежание попадания ненулевых данных в скрипт
        //imagi.style.display = 'none';
        complex.style.display = 'none';
        plus.style.display = 'none';
        i.style.display = 'none';
        p_x1.style.display = 'none';
        document.getElementById("x2").innerHTML = "";
        document.getElementById("x1").innerHTML = "";
        document.getElementById('imaginarium1').innerHTML = "";        
        document.getElementById('imaginarium2').innerHTML = "";
        document.getElementById("subx1").innerHTML = "";
            document.getElementById("xx2").innerHTML = "";
            document.getElementById("subx2").innerHTML = "";
            document.getElementById("=x2").innerHTML = "";
    }
    else {       // если выбрал мнимое число
        //document.getElementById("change").innerHTML = "Скрыть мнимую часть";
        //imagi.style.display = 'inline';
        p_x1.style.display = 'inline';
        complex.style.display = 'inline';
        plus.style.display = 'inline';
        i.style.display = 'inline';
        document.getElementById("x2").innerHTML = "";
        document.getElementById("x1").innerHTML = "";
        document.getElementById('imaginarium1').innerHTML = "";        
        document.getElementById('imaginarium2').innerHTML = "";
        document.getElementById("subx1").innerHTML = "";
            document.getElementById("xx2").innerHTML = "";
            document.getElementById("subx2").innerHTML = "";
            document.getElementById("=x2").innerHTML = "";
    }
}

// функция вычисления корня
function sqrt() {

    // возврат к параметрам лейблов по умолчанию
    document.getElementById("subx1").innerHTML = "1";
    document.getElementById("x1").innerHTML = "";
    document.getElementById("xx2").innerHTML = "x";
    document.getElementById("subx2").innerHTML = "2";
    document.getElementById("=x2").innerHTML = " = ";
    document.getElementById("x2").innerHTML = "";
    document.getElementById("imaginarium1").innerHTML = "";
    document.getElementById("imaginarium2").innerHTML = "";
    
    // считывание и преобразование чисел из соответствующих полей
    let number = Number(document.getElementById('number').value);
    let complex = Number(document.getElementById('complex').value);
    let precision = Number(document.getElementById('precision').value);
  
    if (precision < 1 || precision > 16) {
      // диапозон работает по переключению стрелочек. если ввод неверен - выводит ошибку
      alert("Введите корректную точность от 0 до 16!!");
    }
    else if (complex == 0) {
        // если коэффициент при комплексном числе равен 0
        if (number == 0) {
            // зануляет элементы, которые не нужны для вывода одного корня
            document.getElementById("subx1").innerHTML = "";
            document.getElementById("xx2").innerHTML = "";
            document.getElementById("subx2").innerHTML = "";
            document.getElementById("=x2").innerHTML = "";
            document.getElementById('x1').innerHTML = Number(0).toFixed(precision);
          }
          else if (number > 0) {
            let sqrt = Math.sqrt(number);       // берёт корень введённого числа
            sqrt = Math.round(sqrt * Math.pow(10, precision)) / Math.pow(10, precision);        // округляет до заданной точности. если есть нули в конце - он не выводит
            let antsqrt = -sqrt;        // берёт второй корень
            document.getElementById('x1').innerHTML = sqrt.toFixed(precision);        // выводит x1
            //document.getElementById('x2').innerHTML = antsqrt;       // выводит x2
          }
          else {
            let sqrt = Math.abs(number);       // берёт модуль числа, т.к. мнимая часть учтётся позже
            sqrt = Math.sqrt(sqrt);       // берёт корень введённого числа
            sqrt = Math.round(sqrt * Math.pow(10, precision)) / Math.pow(10, precision);        // округляет до заданной точности. если есть нули в конце - он не выводит
            let antsqrt = -sqrt;        // берёт второй корень
            document.getElementById('x1').innerHTML = sqrt.toFixed(precision);        // выводит x1
            //document.getElementById('x2').innerHTML = antsqrt;       // выводит x2
            document.getElementById('imaginarium1').innerHTML = "i";        // добавляет мнимую часть
            //document.getElementById('imaginarium2').innerHTML = "i";        // добавляет мнимую часть
            //p_x1.style.display = 'inline';
            /*для вывода со знаком умножения:
            document.getElementById('imaginarium1').innerHTML = "·i";
            document.getElementById('imaginarium2').innerHTML = "·i";*/
          }
    }
    else {        // вычисление мнимой части. в большинстве случаев, сайт для проверки -  https://www.calc.ru/izvlecheniye-kornya-iz-kompleksnogo-chisla-onlayn.html
      let D = Math.pow(number,2) + Math.pow(complex,2);        // дискриминант для решения корней. решается через систему относительно y, одинаковые приведённые действия опущены. подробнее: https://youtu.be/UoRBVPJJBU0?t=34
    let x21 = (number + Math.sqrt(D)) / 2;        // первый квадрат корня
    let x22 = (number - Math.sqrt(D)) / 2;        // второй квадрат корня

    let x1;        // объявление первого свободного члена
    if (x21 >= 0) {        // проверки на действительность квадрата корня. извлекает корень только из неотрицательного квадрата корня.
      x1 = Math.sqrt(x21);
    }
    else {
      x1 = Math.sqrt(x22);
    }

    let x2 = -x1;        // объявление второго свободного члена
    let y1 = complex / (2 * x1);        // объявление первого коэффициента при i
    let y2 = complex / (2 * x2);        // объявление второго коэффициента при i

    x1 = Math.round(x1 * Math.pow(10, precision)) / Math.pow(10, precision);        // округляет свободный член первого корня до заданной точности. если есть нули в конце - он не выводит
    y1 = Math.round(y1 * Math.pow(10, precision)) / Math.pow(10, precision);        // округляет коэффициент при i первого корня до заданной точности. если есть нули в конце - он не выводит
    x2 = Math.round(x2 * Math.pow(10, precision)) / Math.pow(10, precision);        // округляет свободный член второго корня до заданной точности. если есть нули в конце - он не выводит
    y2 = Math.round(y2 * Math.pow(10, precision)) / Math.pow(10, precision);        // округляет коэффициент при i второго корня до заданной точности. если есть нули в конце - он не выводит
    
    if (y1 < 0) {        // проверки для красивого вывода без повторений знаков типа "+ -"
      document.getElementById('imaginarium1').innerHTML = x1 + " - " + Math.abs(y1) + "i";
    }
    else {
      document.getElementById('imaginarium1').innerHTML = x1 + " + " + y1 + "i";
    }

    if (y2 < 0) {
      document.getElementById('imaginarium2').innerHTML = x2 + " - " + Math.abs(y2) + "i";
    }
    else {
      document.getElementById('imaginarium2').innerHTML = x2 + " + " + y2 + "i";
    }
      
    }
  
  }
