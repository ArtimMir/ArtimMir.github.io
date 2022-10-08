
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
  
    if (precision < 0 || precision > 16) {
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
            document.getElementById('x1').innerHTML = 0;
          }
          else if (number > 0) {
            let sqrt = Math.sqrt(number);       // берёт корень введённого числа
            sqrt = Math.round(sqrt * Math.pow(10, precision)) / Math.pow(10, precision);        // округляет до заданной точности. если есть нули в конце - он не выводит
            //let antsqrt = -sqrt;        // берёт второй корень
            document.getElementById('x1').innerHTML = sqrt;        // выводит x1
            //document.getElementById('x2').innerHTML = antsqrt;       // выводит x2
          }
          else {
            let sqrt = Math.abs(number);       // берёт модуль числа, т.к. мнимая часть учтётся позже
            sqrt = Math.sqrt(sqrt);       // берёт корень введённого числа
            sqrt = Math.round(sqrt * Math.pow(10, precision)) / Math.pow(10, precision);        // округляет до заданной точности. если есть нули в конце - он не выводит
            let antsqrt = -sqrt;        // берёт второй корень
            document.getElementById('x1').innerHTML = antsqrt;        // выводит x1
            document.getElementById('x2').innerHTML = sqrt;       // выводит x2
            document.getElementById('imaginarium1').innerHTML = "i";        // добавляет мнимую часть
            document.getElementById('imaginarium2').innerHTML = "i";        // добавляет мнимую часть
            /*для вывода со знаком умножения:
            document.getElementById('imaginarium1').innerHTML = "·i";
            document.getElementById('imaginarium2').innerHTML = "·i";*/
          }
    }
    else {        // вычисление мнимой части. в большинстве случаев, сайт для проверки -  https://www.calc.ru/izvlecheniye-kornya-iz-kompleksnogo-chisla-onlayn.html
      let r = Math.sqrt(Math.sqrt(Math.pow(number, 2) + Math.pow(complex, 2)));        // вычисление необходимого коэффициента
      let φ;        // объявление угла фи
      if (number > 0) {        // здесь и далее идёт проверка нескольких условий для вычисления мнимости угла. подробнее про эти условия можно узнать при вычислении мнимых корней на сайте https://mathdf.com/com/ru/
        φ = Math.atan(complex/number);        // вычисление арктангенса
        φ = φ * 180 / Math.PI;        // перевод из радиан в градусы
      }
      else if (number < 0 && complex >= 0) {
        φ = Math.atan(complex/number);        // вычисление арктангенса
        φ = φ * 180 / Math.PI + Math.PI;        // перевод из радиан в градусы
      }
      else if (number < 0 && complex < 0) {
        φ = Math.atan(complex/number);        // вычисление арктангенса
        φ = φ * 180 / Math.PI - Math.PI;        // перевод из радиан в градусы
      }
      else if (number == 0 && complex > 0) {        // здесь есть проблема: с сайтом "calc.ru ..." - для следующих двух случаев неправильно считает коэффициент при мнимой части. возможна ошибка со стороны сайта, т.к. там почему-то угол зануляется 
        φ = Math.PI / 2;        // объявление угла в градусах
      }
      else if (number == 0 && complex < 0) {
        φ = -Math.PI / 2;        // объявление угла в градусах
      }
      
      let rcos1 = r * Math.cos(φ * Math.PI / 360);        // вычисление свободного члена для первого корня
      let rsin1 = r * Math.sin(φ * Math.PI / 360);        // вычисление коэффициента при i для первого корня
      
      let rcos2 = r * Math.cos((φ + 2 * Math.PI) * Math.PI / 360);        // вычисление свободного члена для второго корня
      let rsin2 = r * Math.sin((φ + 2 * Math.PI) * Math.PI / 360);        // вычисление коэффициента при i для второго корня
      
      rcos1 = Math.round(rcos1 * Math.pow(10, precision)) / Math.pow(10, precision);        // округляет свободный член первого корня до заданной точности. если есть нули в конце - он не выводит
      rsin1 = Math.round(rsin1 * Math.pow(10, precision)) / Math.pow(10, precision);        // округляет коэффициент при i первого корня до заданной точности. если есть нули в конце - он не выводит
      rcos2 = Math.round(rcos2 * Math.pow(10, precision)) / Math.pow(10, precision);        // округляет свободный член второго корня до заданной точности. если есть нули в конце - он не выводит
      rsin2 = Math.round(rsin2 * Math.pow(10, precision)) / Math.pow(10, precision);        // округляет коэффициент при i второго корня до заданной точности. если есть нули в конце - он не выводит
      
      if (rsin1 < 0) {        // проверки для красивого вывода без повторений знаков типа "+ -"
        document.getElementById('imaginarium1').innerHTML = rcos1 + " - " + Math.abs(rsin1) + "i";
      }
      else {
        document.getElementById('imaginarium1').innerHTML = rcos1 + " + " + rsin1 + "i";
      }

      if (rsin2 < 0) {
        document.getElementById('imaginarium2').innerHTML = rcos2 + " - " + Math.abs(rsin2) + "i";
      }
      else {
        document.getElementById('imaginarium2').innerHTML = rcos2 + " + " + rsin2 + "i";
      }
      
    }
  
  }
