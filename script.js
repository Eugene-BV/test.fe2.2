document.getElementById("btn2").onclick = bB;

function bB() {
    var c = document.getElementById("login").value;
    var d = document.getElementById("passw").value;
    if (c == "ivan" && d == "333") {
        alert("Добро пожаловать");
    }
    else if (c == "ssss" && d == "666") {
        alert("Добро пожаловать");
    }
    else if (c == "gibs" && d == "0000") {
        alert("Добро пожаловать");
    }
    else {
        alert("Ошибка");
    }
}

document.getElementById("btn3").onclick = kK;



function kK() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var number3 = document.getElementById("num3").value;
//проверка1
    if  (number1 == number2 && number2 == number3) {
        alert("Число №1,№2,№3 одинаковые");
        
    }
    
//проверка2
    else if (number1 == number2) {
        if (number1 > number3) {
            document.getElementById("answer").innerHTML = "Число №1,№2 максимальные";
        }
        else {
            document.getElementById("answer").innerHTML = "Число №3 максимальное";
        }
    }
    
//проверка3  
    else if (number2 == number3) {
        if (number2 > number1) {
            document.getElementById("answer").innerHTML = "Число №2,№3 максимальные";
        }
        else {
            document.getElementById("answer").innerHTML = "Число №1 максимальное";
        }
    }

//проверка4 
    else if (number1 == number3) {
        if (number1 > number2) {
            document.getElementById("answer").innerHTML = "Число №1,№3 максимальные";
        }
        else {
            document.getElementById("answer").innerHTML = "Число №2 максимальное";
        }
    }
    
//проверка5 
    else {
        if (number1 > number2) {
            if (number1 > number3) {
            document.getElementById("answer").innerHTML = "Число №1 максимальное";
            }
            else {
            document.getElementById("answer").innerHTML = "Число №3 максимальное";
            }
        }
        else {
            if (number2 > number3) {
            document.getElementById("answer").innerHTML = "Число №2 максимальное";
            }
            else {
            document.getElementById("answer").innerHTML = "Число №3 максимальное";
            }
        }
    }
    
}


document.getElementById("btndob").onclick = gG;

function gG () {
    var dobirth = document.getElementById("dob").value;
    if (dobirth >= 0 && dobirth <= 17) {
        alert("вам "+(17-dobirth)+" лет");
        }
    else if (dobirth <= 2017 && dobirth >= 0){
        alert("вам "+(2017-dobirth)+" лет");
    }
    else {
        alert("Дата введена не правильно");
    }
}


document.getElementById("btnnum").onclick = hH;

function hH () {
    var number1 = document.getElementById("numm1").value;
    var number2 = document.getElementById("numm2").value;
    if  (number1 == number2) {
        alert("Числа №1 и №2 равны")
    }
    else if (number1 < number2) {
        alert("Число №2 большее")
    }
    else {
        alert("Число №1 большее")
    }
}

document.getElementById("btnflat").onclick = vV;

function vV () {
    var flatv = document.getElementById("flat").value;
    if (flatv >= 1 && flatv <= 20) {
        alert("Квартира в подьезде №1");
    }
    else if (flatv >= 21 && flatv <= 64) {
        alert("Квартира в подьезде №2");
    }
    else if (flatv >= 65 && flatv <= 80) {
        alert("Квартира в подьезде №3");
    }
    else {alert("В этом доме нет такой квартиры");
    }
}


document.getElementById("btnsimvol").onclick = Smvl;

function Smvl () {
    var sim1 = document.getElementById("simvol1").value;
    var sim2 = document.getElementById("simvol2").value;
    var p = document.getElementById("outsimvol");
    for (var q = sim1; q <= sim2; q=q++) {

    p.innerHTML += '&#'+i+';';
    
}
}


var p = document.getElementById("out");
j=0
for (var i = 1; i <= 100; i=i+1) {
    j=j+i
    p.innerHTML += j + " ";
}



