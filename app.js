const input = document.querySelector('.input');
const output = document.querySelector('.output');
const button = document.querySelector('.button');

const num1 = document.querySelector('.button1');

num1.addEventListener('click', printNum1);

function printNum1(e){
    // if(input.value === 1){
        // input.value.toString();
        input.value + '1';
    
    // }
    e.preventDefault();
}

// let n3 = 4;
// console.log(typeof(n3.toString()));





// console.log(input.value);

