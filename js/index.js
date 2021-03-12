//Define Variable
const addIcon = document.querySelectorAll('.plus-sign');
const minusIcon = document.querySelectorAll('.minus-sign');
const numberBox = document.querySelectorAll('.body__count__calc-num');
const sumBox = document.querySelectorAll('.card__box__price-num');
const navNumber = document.querySelector('.header__nav-not-number');
const deleteBtn = document.querySelectorAll('.body__count__del');
const url = ['pic/image 1.jpg','../pic/meal 2.png', 'pic/image 1.jpg'];
state = {};
state.isDelete = false;
state.array = [75,15,75];
//Define Function
function eliminteCard(id) {
    let arr = document.querySelectorAll('.card');
    if (id === 0) 
        arr[0].style.display = 'none'; 
    else if (id === 1) 
        arr[0].style.display = 'none';           
    else 
        arr[1].style.display = 'none';        
}
function calculation(sum, id) {
    let value = [0,0,0], count = [75,15,75];    
    value[id] = sum[id] * count[id];    
    state.array[id] = value[id];   
}
function eliminteSum(id) {
    return state.array[id] = 0;
}
//Declare Class
class CardProduct {
    constructor(owner,destination,productName,price, id, primePrice, img, shopName) {
        this.owner = owner;
        this.destination = destination;
        this.productName = productName;
        this.price = price;  
        this.id = id;
        this.primePrice = primePrice;
        this.img = img;
        this.shopName = shopName;
    } 
    changeNumber(add, minus, box) {        
        let sum = [1,1,1];              
        add[this.id].addEventListener('click', () => { 
            sum[this.id]++;           
            box[this.id].textContent = sum[this.id];             
            calculation(sum, this.id);
            sumBox[0].textContent = state.array[0] + state.array[1] + ',000';
            sumBox[1].textContent = state.array[2] + ',000';
            sumBox[2].textContent = state.array[0] + state.array[1] + state.array[2] + ',000';
        });        
        minus[this.id].addEventListener('click', () => {
            sum[this.id]--;
            if (sum[this.id] >= 1) {
            box[this.id].textContent = sum[this.id]; 
            calculation(sum, this.id);
            sumBox[0].textContent = state.array[0] + state.array[1] + ',000';
            sumBox[1].textContent = state.array[2] + ',000';
            sumBox[2].textContent = state.array[0] + state.array[1] + state.array[2] + ',000';
        } else sum[this.id] = 1;
        });          
    }
    speedChange(duration,add,minus,box) {
        let sum = 1, speed;        
        add[this.id].addEventListener('mousedown', () => {
            speed = setInterval(() => {
                sum++;
                box[this.id].textContent = sum;
            },duration);
        }); 
        add[this.id].addEventListener('mouseup', () => {
           clearInterval(speed);
        });
        minus[this.id].addEventListener('mousedown', () => {
            speed = setInterval(() => {
                sum++;
                box[this.id].textContent = sum;
            },duration);
        }); 
        minus[this.id].addEventListener('mouseup', () => {
            clearInterval(speed);
        });    
    }
    deleteIcon(list,nav) {
        let count = nav.innerHTML, bodyMeal = document.querySelectorAll('.body__meal'), bodyCount = document.querySelectorAll('.body__count');    
        state.count = count; 
        state.card = [2,2];        
        list[this.id].addEventListener('click', () => {
            eliminteSum(this.id);
            sumBox[0].textContent = state.array[0] + state.array[1] + ',000';
            sumBox[1].textContent = state.array[2] + ',000';
            sumBox[2].textContent = state.array[0] + state.array[1] + state.array[2] + ',000';
            if (!state.isDelete) {
                bodyMeal[this.id].style.display = 'none';
                bodyCount[this.id].style.display = 'none';            
                state.count--;
                state.card[0]--;
                nav.textContent = state.count;
                document.querySelector('.price-number').textContent = state.card[0];
                state.isDelete = true;
            }    
            else if (state.isDelete) {
                eliminteCard(this.id);
                state.count--;                
                nav.textContent = state.count;
                state.card[1]--;
                document.querySelector('.price-number').textContent = state.card[1];
                document.querySelector('.price-number-1').textContent = state.card[1];
                if (state.card[1] < 0) {
                    state.card[1] = 0;
                    document.querySelector('.price-number-1').textContent = state.card[1];
                }
            }
        });  
    }    
};
//Create Object
const product1 = new CardProduct('مینوهنگام', 'سعادت شهر', 'سوسیس آلمانی پنیری', 75, 0, 85, url[0], 'خوشمزه های خاتون');
const product2 = new CardProduct('مینوهنگام', 'سعادت شهر', 'کالباس پسته', 15, 1, 35, url[1], 'خوشمزه های خاتون');
const product3 = new CardProduct('سارا خوش دل', 'بوشهر', 'سوسیس آلمانی پنیری', 75, 2, 85, url[2], 'محصولات غذایی ولیک');
//Calling Function
product1.changeNumber(addIcon, minusIcon, numberBox);
product2.changeNumber(addIcon, minusIcon, numberBox);
product3.changeNumber(addIcon, minusIcon, numberBox);
product1.deleteIcon(deleteBtn,navNumber);
product2.deleteIcon(deleteBtn,navNumber);
product3.deleteIcon(deleteBtn,navNumber);
//Create New Card
const html = `
    <section class="card">
        <div class="card__header">                            
            <p class="card__header-p">از غرفه:<b>   ${product3.shopName}</b></p>
        </div>
        <div class="card__body">
            <figure class="body__user">
                <img class="body__user-img" src="pic/user-6.jpg" alt="user photo">                        
                <div class="body__user__exp">
                    <figcaption class="body__user__exp-cap">${product3.owner}</figcaption>
                    <div class="body__user__loc">
                        <img class="body__user__loc-icon" src="pic/location.svg" alt="location svg">
                        <p class="body__user__loc-p">از ${product3.destination}</p>
                    </div>                            
                </div>
            </figure>                    
            <div class="body__meal">
                    <img class="body__meal-img" src="pic/image 1.jpg" alt="meal image">
                    <p class="body__meal-cap">${product3.productName}</p>
                    <div class="body__meal-box">
                        <p class="body__meal-box-off"><s>${product3.primePrice + ',000'}</s></p>
                        <input class="body__meal-price" type="text" value="${product3.price + ',000'}" readonly>
                        <img class="card__box__price-pic" src="/pic/toman.svg" alt="price pic">
                    </div>                                
            </div>
            <div class="body__count">
                <div class="body__count__calc">
                    <button class="minus-sign"><img src="pic/add.svg" alt="add sign"></button>                                 
                    <div class="body__count__calc-num">1</div>
                    <button class="plus-sign"><img src="pic/minus-2.svg" alt="minus sign"></button>                           
                </div>                        
                <button><img class="body__count__del" src="pic/delete.svg" alt="delete sign"></button>                        
                <div class="body__count__cap">
                    <p class="body__count__cap-p">ذخیره در لیست خرید بعدی</p>
                </div>
            </div>
        </div>                   
        <div class="card__footer">
            <p class="card__footer-p card__footer-p-edit">برای ارسال رایگان: <span class="span-black">۴۵۰۰۰ تومان دیگه از این غرفه خرید کنید.</span></p>                        
            <div class="card__box card__box-edit">
                <button class="btn-red"><a class="btn-red-link" href="#">ادامه خرید فقط از این غرفه</a></button>
                <div class="card__box__price">
                    <p class="card__box__price-p">جمع مبلغ برای<span class="price-number"> 1 </span>کالا</p>
                    <div class="card__box__price-box">
                        <p class="card__box__price-num">75,000</p>
                        <img class="card__box__price-pic" src="/pic/toman.svg" alt="price pic">
                    </div>                                
                </div>
            </div>
        </div>                  
    </section>`
const card = document.querySelectorAll('.card');
//card[0].insertAdjacentHTML('beforebegin', html);
