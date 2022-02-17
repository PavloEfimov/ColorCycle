let inputColorRed = document.querySelector('#inputColorRed');
let inputColorBlue = document.querySelector('#inputColorBlue');
let inputColorGreen = document.querySelector('#inputColorGreen');
let colorDiv = document.querySelector('.colorDiv');
let fillBtn = document.querySelector('#fillBtn');
let inpIncrement = document.querySelector('#inpIncrement');
let spanIncrement = document.querySelector('#spanIncrement');







fillBtn.addEventListener('click', colorFn);
inpIncrement.addEventListener('keydown', inpIncrFn);


function colorFn(e){
        console.log(e.target.value);
        colorDiv.style.backgroundColor = `#${inputColorRed.value+inputColorBlue.value+inputColorGreen.value}`
 
}
function inpIncrFn(e){
        if (e.code==='Enter'){
                spanIncrement.textContent = `increment value: ${inpIncrement.value}`   
        }
}