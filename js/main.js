let listItem = document.querySelectorAll('.list__item');
console.log(listItem[3]);

/* for (let i = 0; i < 10; i++) {
    console.log(i);
}
 */
let button = document.querySelector('.button');

listItem.forEach(items => {
    items.classList.add('list__item--active');
});

function getSumm(x, y) {
    console.log(x + y);
}

/* вызов функции */
getSumm(5, 10);

const test = (name, age) => {
    console.log('Здорово, ' + name + '. Тебе ' + age + ' лет?');
}
test('Сева', '25');

button.addEventListener('click', function(event) {
    console.log('Вы кликнули по кнопке');
});

button.addEventListener('click', function(event) {
    console.log('Вы кликнули по кнопке' + this.classList);
});

document.addEventListener('keypress', (event) => {
    /* console.log('Вы нажали на клавишу:' + event.code); */
    console.log('Вы нажали на клавишу:' + event.key);
});

document.addEventListener('keypress', (event) => {
if (event.code == 'Space') {
    console.log('Вы нажали на пробел');
} else {
    console.log('Вы нажали НЕ на пробел а куда-то ещё если (нажали)');
}
});