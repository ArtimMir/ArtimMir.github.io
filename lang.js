const select = document.querySelector('#change-lang');
const allLang = ['RU', 'EN', 'ES'];
const langArr = {
    "header" : { 
        "RU" : "Вычисление корней",
        "EN" : "Calculating roots",
        "ES" : "Calcular las raícES",
    },
    "num" : {
        "RU" : "Обычное число",
        "EN" : "Normal number",
        "ES" : "Número normal",
    },
    "complex" : {
        "RU" : "Комплексное число",
        "EN" : "Complex number",
        "ES" : "Número complejo",
    },
    "h2" : { 
        "RU" : "Вычисление корней",
        "EN" : "Calculating roots",
        "ES" : "Calcular las raícES",
    },
    "#inp_number" : {
        "RU" : "Введите число:",
        "EN" : "Enter a number:",
        "ES" : "Introduce un número:",
    },
    "#inp_precision" : {
        "RU" : "Введите точность:",
        "EN" : "Enter precision:",
        "ES" : "Introduzca la precisión:",
    },
    "#calculate" : {
        "RU" : "Вычислить",
        "EN" : "Calculate",
        "ES" : "Calcular",
    },
    ".modal-title" : {
        "RU" : "Руководство пользователя",
        "EN" : "User manual",
        "ES" : "Manual del usuario",
    },
    ".modal-title2" : {
        "RU" : "Руководство по использованию программы.",
        "EN" : "A guide to using the program.",
        "ES" : "Guía de uso del programa.",
    },
    ".first-p" : {
        "RU" : "1. Выберите режим 'Обычное число' или 'Комплексное число' в раскрывающемся списке после заголовка 'Вычисление корней'.",
        "EN" : "1. Select the 'Normal Number' or 'Complex Number' mode from the drop-down list after the 'Calculate Roots' heading.",
        "ES" : "1. Seleccione el modo 'Número normal' o 'Número complejo' en la lista desplegable que aparece tras el epígrafe 'Calcular raíces.'",
    },
    ".two-p" : {
        "RU" : "2. Введите число, из которого хотите извлечь корень в поле с надписью 'Введите число'.",
        "EN" : "2. Enter the number from which you want to extract the root in the box labeled 'Enter Number'.",
        "ES" : "2. Introduzca el número del que desea extraer la raíz en la casilla 'Introducir número'.",
    },
    ".two-p-dop" : {
        "RU" : "Если выбран режим 'Комплексное число', дополнительно введите число перед i.",
        "EN" : "If 'Complex number' mode is selected, additionally enter the number before i.",
        "ES" : "Si se selecciona el modo 'Número complejo', introduzca adicionalmente el número antes de i.",
    },
    ".three-p" : {
        "RU" : "3. Введите точность, с которой нужно вычислить квадратный корень этого числа в поле с надписью 'Введите точность'.",
        "EN" : "3. Enter the precision with which you want to calculate the square root of this number in the 'Enter precision' box.",
        "ES" : "3. Introduzca la precisión con la que desea calcular la raíz cuadrada de este número en la casilla 'Introducir precisión'.",
    },
    ".four-p" : {
        "RU" : "4. Нажмите кнопку 'Вычислить'. Результат будет показан выше кнопки.",
        "EN" : "4. Press the Calculate button. The result will be shown above the button.",
        "ES" : "4. Pulse el botón Calcular. El resultado se mostrará encima del botón.",
    },
    ".lang-p" : {
        "RU" : "Если Вы хотите изменить язык интерфейса, можно сделать это в левом верхнем углу.",
        "EN" : "If you want to change the interface language, you can do so in the upper left corner.",
        "ES" : "Si quieres cambiar el idioma de la interfaz, puedes hacerlo en la esquina superior izquierda.",
    },
    ".forum" : {
        "RU" : "Форум",
        "EN" : "Forum",
        "ES" : "Foro",
    },
};



//select.addEvENtListENer('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}
select.addEventListener("change", changeURLLanguage);

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#EN';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['header'][hash];
    document.getElementsByName('num_or_complex')[0].options[0].innerHTML = langArr['num'][hash];
    document.getElementsByName('num_or_complex')[0].options[1].innerHTML = langArr['complex'][hash];
    // documENt.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector(key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage();
