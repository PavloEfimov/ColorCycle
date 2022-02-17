let inputColorRed = document.querySelector('#inputColorRed');
let inputColorBlue = document.querySelector('#inputColorBlue');
let inputColorGreen = document.querySelector('#inputColorGreen');
let colorDiv = document.querySelector('.colorDiv');
let fillBtn = document.querySelector('#fillBtn');







fillBtn.addEventListener('click', colorFn);


function colorFn(e){

        console.log(e.target.value);
        colorDiv.style.backgroundColor = `#${inputColorRed.value+inputColorBlue.value+inputColorGreen.value}`
  
   
}