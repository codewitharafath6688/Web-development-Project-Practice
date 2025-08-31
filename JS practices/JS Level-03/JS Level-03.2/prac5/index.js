let cardContainer = document.getElementById('cards');

console.log(cardContainer.classList.add('container'));

let cards = document.querySelectorAll('#cards .card');

for(let card of cards){
    console.log(card.classList.add('border', 'border-margin'));
}

let para = document.getElementsByTagName('p');

for(let pa of para){
    console.log(pa);
    pa.style.color = 'red';
}