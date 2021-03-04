
let arrPlus = document.querySelectorAll('.plus-sign');
let arrMinus = document.querySelectorAll('.minus-sign');
let boxNumber = document.querySelectorAll('.body__count__calc-num');


function changeDom1() {
    let sum = 1;   

    boxNumber[0].textContent = sum;

    arrPlus[0].addEventListener('click', () => {
        sum++;
        boxNumber[0].textContent = sum;
    }); 
    
    arrMinus[0].addEventListener('click', () => {
        sum--;
        if (sum >= 1) {
        boxNumber[0].textContent = sum;
        }
    });
};

function changeDom2() {
    let sum = 1;    

    boxNumber[1].textContent = sum;

    arrPlus[1].addEventListener('click', () => {
        sum++;
        boxNumber[1].textContent = sum;
    });
    
    arrMinus[1].addEventListener('click', () => {
        sum--;
        if (sum >= 1) {
        boxNumber[1].textContent = sum;
        }
    });
};

function changeDom3() {
    let sum = 1;    

    boxNumber[2].textContent = sum;

    arrPlus[2].addEventListener('click', () => {
        sum++;
        boxNumber[2].textContent = sum;
    });
    
    arrMinus[2].addEventListener('click', () => {
        sum--;
        if (sum >= 1) {
        boxNumber[2].textContent = sum;
        }
    });
};

changeDom1();
changeDom2();
changeDom3();


