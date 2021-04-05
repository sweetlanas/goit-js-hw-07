const inputEl = document.getElementById('name-input');
const nameEl = document.getElementById('name-output');

inputEl.addEventListener('input', onOutputChangeName);

function onOutputChangeName(){
  if(inputEl.value.length < 1){
    nameEl.textContent = 'незнакомец';
  }else{
    nameEl.textContent = inputEl.value;
  }
};