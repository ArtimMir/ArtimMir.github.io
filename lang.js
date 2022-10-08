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
