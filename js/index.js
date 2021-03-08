//---------------------------------------------------------------------------------------------------
const arrPlus = document.querySelectorAll('.plus-sign');
const arrMinus = document.querySelectorAll('.minus-sign');
const boxNumber = document.querySelectorAll('.body__count__calc-num');
const navNumber = document.querySelector('.header__nav-not-number');
const arrDel = document.querySelectorAll('.body__count__del');
const arrPrice = document.querySelectorAll('.body__meal-price');
const arrcalc = document.querySelectorAll('.card__box__price-num');
//----------------------------------------------------------------------------------------------------
changeNumber(boxNumber, arrPrice, arrcalc);
changeDelBtn(arrDel, navNumber); 

let manage = {};
manage.sum = [0,0,0];

//----------------------------------------------------------------------------------------------------
function changeNumber(list, price, calc) {    
    let sum = [1, 1, 1], input = [], values = [], count = [], timer; 
    
    list.forEach((cur,index) => {
        if (index === 0) {
            cur.textContent = sum[0];
        }
        else if (index === 1) {
            cur.textContent = sum[1];
        }
        else cur.textContent = sum[2];
    });   
      
    price.forEach(cur => {
        input.push(cur.value.split(','));        
    });   
    input.forEach(cur => {
        values.push(parseInt(cur[0]));
    });
    
    count = [...values];       
    count.push(0);   
      
    calc[0].textContent = values[0] + values[1] + ',000';
    calc[1].textContent = values[2] + ',000';
    calc[2].textContent = values[0] + values[1] + values[2] + ',000';    

    arrPlus.forEach((cur,index) => {
        if (index === 0) {
            cur.addEventListener('click', () => {                
                sum[0]++;
                list[0].textContent = sum[0];            
                count[0] = sum[0] * values[0];
                manage.sum[0] = count[0]; 
                calc[0].textContent = count[0] + count[1] + ',000';                 
                calc[2].textContent =  count[0] + count[1] + count[2] + ',000';      
            }); 
            cur.addEventListener('mousedown', () => {
                timer = setInterval(() => {
                    sum[0]++;
                    list[0].textContent = sum[0];            
                    count[0] = sum[0] * values[0];
                    manage.sum[0] = count[0]; 
                    calc[0].textContent = count[0] + count[1] + ',000';
                    calc[2].textContent =  count[0] + count[1] + count[2] + ',000';
                },140);
            });  
            cur.addEventListener('mouseup', () => {
                clearInterval(timer);
            });           
        }
        else if (index === 1) {
            cur.addEventListener('click', () => {                
                    sum[1]++;
                    list[1].textContent = sum[1];                
                    count[1] = sum[1] * values[1]; 
                    manage.sum[1] = count[1]; 
                    calc[0].textContent = count[0] + count[1] + ',000';   
                    calc[2].textContent =  count[0] + count[1] + count[2] + ',000';                  
            });
            cur.addEventListener('mousedown', () => {
                timer = setInterval(() => {
                    sum[1]++;
                    list[1].textContent = sum[1];                
                    count[1] = sum[1] * values[1];
                    manage.sum[1] = count[1]; 
                    calc[0].textContent = count[0] + count[1] + ',000';
                    calc[2].textContent =  count[0] + count[1] + count[2] + ',000';
                },140);
            });  
            cur.addEventListener('mouseup', () => {
                clearInterval(timer);
            }); 
        }       
        else {
            cur.addEventListener('click', () => {
                sum[2]++;
                list[2].textContent = sum[2];  
                count[2] = sum[2] * values[2];
                manage.sum[2] = count[2]; 
                calc[1].textContent = count[2] + ',000';  
                calc[2].textContent = count[2] + count[0] + count[1] + ',000';  
            }); 
            cur.addEventListener('mousedown', () => {
                timer = setInterval(() => {
                    sum[2]++;
                    list[2].textContent = sum[2];  
                    count[2] = sum[2] * values[2];
                    manage.sum[2] = count[2]; 
                    calc[1].textContent = count[2] + ',000';
                    calc[2].textContent = count[2] + count[0] + count[1] + ',000';
                },140);
            });  
            cur.addEventListener('mouseup', () => {
                clearInterval(timer);
            }); 
        }               
    });
    arrMinus.forEach((cur,index) => {
        if (index === 0) {
            cur.addEventListener('click', () => {
            sum[0]--;
            if (sum[0] >= 1) {                
                list[0].textContent = sum[0]; 
                count[0] = sum[0] * values[0];
                manage.sum[0] = count[0];
                calc[0].textContent = count[0] + count[1] + ',000';
                calc[2].textContent =  count[0] + count[1] + count[2] + ',000';
            } else sum[0] = 1;
            }); 
            cur.addEventListener('mousedown', () => {
                timer = setInterval(() => {
                    sum[0]--;
                    if (sum[0] >= 1) {                
                        list[0].textContent = sum[0]; 
                        count[0] = sum[0] * values[0];
                        manage.sum[0] = count[0];
                        calc[0].textContent = count[0] + count[1] + ',000';  
                        calc[2].textContent =  count[0] + count[1] + count[2] + ',000';
                    } else sum[0] = 1;
                },140);
            });  
            cur.addEventListener('mouseup', () => {
                clearInterval(timer);
            });     
        }
        else if (index === 1) {
            cur.addEventListener('click', () => {
                sum[1]--;
                if (sum[1] >= 1) {                
                    list[1].textContent = sum[1];  
                    count[1] = sum[1] * values[1]; 
                    manage.sum[1] = count[1];
                    calc[0].textContent = count[0] + count[1] + ',000'; 
                    calc[2].textContent =  count[0] + count[1] + count[2] + ',000';
                } else sum[1] = 1;
            });
            cur.addEventListener('mousedown', () => {
                timer = setInterval(() => {
                    sum[1]--;
                    if (sum[1] >= 1) {                
                        list[1].textContent = sum[1];  
                        count[1] = sum[1] * values[1]; 
                        manage.sum[1] = count[1]; 
                        calc[0].textContent = count[0] + count[1] + ',000'; 
                        calc[2].textContent =  count[0] + count[1] + count[2] + ',000';
                    } else sum[1] = 1;
                },140);
            });  
            cur.addEventListener('mouseup', () => {
                clearInterval(timer);
            });
        }
        else {
            cur.addEventListener('click', () => {
                sum[2]--;
                if (sum[2] >= 1) {                
                    list[2].textContent = sum[2];  
                    count[2] = sum[2] * values[2];
                    manage.sum[2] = count[2]; 
                    calc[1].textContent = count[2] + ',000';  
                    calc[2].textContent = count[2] + count[0] + count[1] + ',000';   
                } else sum[2] = 1;
            });
            cur.addEventListener('mousedown', () => {
                timer = setInterval(() => {
                    sum[2]--;
                    if (sum[2] >= 1) {                
                        list[2].textContent = sum[2];  
                        count[2] = sum[2] * values[2];
                        manage.sum[2] = count[2]; 
                        calc[1].textContent = count[2] + ',000';
                        calc[2].textContent = count[2] + count[0] + count[1] + ',000';
                    } else sum[2] = 1;
                },140);
            });  
            cur.addEventListener('mouseup', () => {
                clearInterval(timer);
            });
        }               
    });         
}
//----------------------------------------------------------------------------------------------------
function changeDelBtn(list, nav) {
    let state = {}, count = 3;

    state.isDelete = false;
    state.isFullDelete = false;    
    nav.textContent = count;   

    list.forEach(cur => {           
        cur.addEventListener('click', () => { 
            if (count > 1) {       
                count--;
                nav.textContent = count;
                cur.addEventListener('click', () => {                                  
                    count--;
                    nav.textContent = count;                                       
                });  
            }                     
        });    
    });

    list[0].addEventListener('click', () => {
        if (!state.isFullDelete) {
            if (state.isDelete) {
                let arr = document.querySelectorAll('.card');
                arr[0].style.display = 'none';
                state.isFullDelete = true;
                manage.sum[0] = 0;
            }
        }           
        if (!state.isDelete) {           
            document.querySelector('.body__meal').style.display = 'none';
            document.querySelector('.body__count').style.display = 'none'; 
            document.querySelector('.card__body').style.marginBottom = '-20px';
            state.isDelete = true;
            manage.sum[0] = 0;
        }             
    });
    list[1].addEventListener('click', () => {
        if (!state.isFullDelete) {
            if (state.isDelete) {           
                let arr = document.querySelectorAll('.card');
                arr[0].style.display = 'none';  
                state.isFullDelete = true;  
                manage.sum[1] = 0;
            } 
        }         
        if (!state.isDelete) {
            let arr = document.querySelectorAll('.card__body');
            arr[1].style.display = 'none';
            state.isDelete = true;
            manage.sum[1] = 0;
        }         
    });
    list[2].addEventListener('click', () => {
        if (!state.isFullDelete) {
            let arr = document.querySelectorAll('.card');
            arr[1].style.display = 'none';
            state.isFullDelete = true;
            manage.sum[2] = 0;
        }              
    });
}