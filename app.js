const display1el = document.querySelector('.display-1');
const display2el = document.querySelector('.display-2');
const tempresultel = document.querySelector('.temresult');

const numbersel = document.querySelectorAll('.number');
const operationel = document.querySelectorAll('.operation');
const equalel = document.querySelector('.equal');
const clearel = document.querySelector('.allclear');
const cleareel = document.querySelector('.alllastclear');

// Variables :
let display1Num = '';
let display2Num = '';
let result = null;
let lastOperation = '';
let dot = false;


// display2 numbers and dot
numbersel.forEach( number => {
    number.addEventListener('click', (e) => {    
        if(e.target.innerText === '.' && !dot){
            dot = true;
        } else if (e.target.innerText === '.' && dot) { 
            return;
        }
        display2Num += e.target.innerText;
        display2el.innerText = display2Num;
    })
})

// mathematical operation
operationel.forEach(operation => {
    operation.addEventListener('click', (e) => {    
        if (!display2Num) return;
        dot = false;
        const operationName = e.target.innerText;
        if (display1Num && display2Num && lastOperation) {   
            mathOperation();   
        } else {      
            result = parseFloat(display2Num); 
        }
        })
})