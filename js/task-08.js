const inputEl = document.querySelector('input[type="number"]');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesEl = document.getElementById('boxes');
const inputMax = +inputEl.getAttribute('max');

renderBtn.addEventListener('click', e => {
  const number = +inputEl.value;
  createBoxes(number);
});

destroyBtn.addEventListener('click', e => {
  inputEl.value = '';
  boxesEl.innerHTML = '';
});

const randomizer = () => {
  return `rgb(${Math.random() * 255 << 0}, ${Math.random() * 255 << 0}, ${Math.random() * 255 << 0})`;
};

const createBoxes = (amount) => {
  const array = [];

  if (array.length < inputMax) {
     boxesEl.innerHTML = '';
  }

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = (30 + i * 10) + 'px';
    boxEl.style.height = (30 + i * 10) + 'px';
    boxEl.style.backgroundColor = randomizer();
    boxEl.style.margin = 3 + 'px';
    array.push(boxEl);
  }
  boxesEl.append(...array);
}