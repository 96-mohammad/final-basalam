
let arrPlus = document.querySelectorAll('.plus-sign');
let arrMinus = document.querySelectorAll('.minus-sign');
let boxNumber = document.querySelectorAll('.body__count__calc-num');
let navNumber = document.querySelector('.header__nav-not-number');

let arr = Array.prototype.slice.call(arrPlus);
let array = Array.prototype.slice.call(arrMinus);
let list = Array.prototype.slice.call(boxNumber);

function changeDom(list, nav) {
    let sum, sum1, sum2, sum3;
    
    sum1 = 1;
    sum2 = 1;
    sum3 = 1;
    sum = sum1 + sum2 + sum3;

    list[0].textContent = sum1;
    list[1].textContent = sum2;
    list[2].textContent = sum3;
    nav.textContent = sum;

    arr.forEach((cur,index) => {
        if (index === 0) {
            cur.addEventListener('click', () => {
            sum1++;
            list[0].textContent = sum1;
            sum = sum1 + sum2 + sum3;
            nav.textContent = sum;
            });        
        }
        else if (index === 1) {
            cur.addEventListener('click', () => {
                sum2++;
                list[1].textContent = sum2;
                sum = sum1 + sum2 + sum3;
                nav.textContent = sum;
            });
        }
        else cur.addEventListener('click', () => {
                sum3++;
                list[2].textContent = sum3;
                sum = sum1 + sum2 + sum3;
                nav.textContent = sum;
        });
    });

    array.forEach((cur,index) => {
        if (index === 0) {
            cur.addEventListener('click', () => {
            sum1--;
            if (sum1 >= 1) {                
                list[0].textContent = sum1; 
                sum = sum1 + sum2 + sum3;
                nav.textContent = sum;                
            } else sum1 = 1;
            });        
        }
        else if (index === 1) {
            cur.addEventListener('click', () => {
                sum2--;
                if (sum2 >= 1) {                
                    list[1].textContent = sum2; 
                    sum = sum1 + sum2 + sum3;
                    nav.textContent = sum;               
                } else sum2 = 1;
            });
        }
        else cur.addEventListener('click', () => {
            sum3--;
            if (sum3 >= 1) {                
                list[2].textContent = sum3; 
                sum = sum1 + sum2 + sum3;
                nav.textContent = sum;               
            } else sum3 = 1;
        });
    });
};

changeDom(boxNumber, navNumber);

/*
function renderDom(arrPlus,arrMinus,list,navNumber) {    
    let sum1 = 1;
    let sum2 = 1;
    let sum3 = 1;
    let count = sum1 + sum2 + sum3;

    list[0].textContent = sum1;
    list[1].textContent = sum2;
    list[2].textContent = sum3;
    navNumber.textContent = count;

    arrPlus[0].addEventListener('click', () => {
        sum1++;
        list[0].textContent = sum1;
        count = sum1 + sum2 + sum3;        
        navNumber.textContent = count;
    });
    arrPlus[1].addEventListener('click', () => {
        sum2++;
        list[1].textContent = sum2;
        count = sum1 + sum2 + sum3;
        navNumber.textContent = count;
    });
    arrPlus[2].addEventListener('click', () => {
        sum3++;
        list[2].textContent = sum3;
        count = sum1 + sum2 + sum3;
        navNumber.textContent = count;    
    });  
    
    arrMinus[0].addEventListener('click', () => {
        sum1--;
        if (sum1 >= 1) {
        list[0].textContent = sum1;
        count = sum1 + sum2 + sum3;
        navNumber.textContent = count;
        } else sum1 = 1;
    });
    arrMinus[1].addEventListener('click', () => {
        sum2--;
        if (sum2 >= 1) {
        list[1].textContent = sum2;
        count = sum1 + sum2 + sum3;
        navNumber.textContent = count;
        } else sum2 = 1;
    });
    arrMinus[2].addEventListener('click', () => {
        sum3--;
        if (sum3 >= 1) {
        list[2].textContent = sum3;
        count = sum1 + sum2 + sum3;
        navNumber.textContent = count;
        } else sum3 = 1;
    }); 
    renderDom(arrPlus,arrMinus,boxNumber,navNumber);     
};
*/