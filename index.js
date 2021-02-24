const button = document.querySelector('div button');
const counter = document.querySelector('#counter');
let contains = document.querySelector('main').children.length;

counter.textContent = `There are ${contains} articles`;

const counterHandler = () => {
    counter.textContent = `There are ${contains} articles`;
}

button.addEventListener('click', () => {
    const main = document.querySelector('main');
    let article = document.createElement('article');
    let header = document.createElement('h2');
    let parag = document.createElement('p');

    let date = `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
    const title = window.prompt('Write your title');
    const body = window.prompt('Write your body');

    header.textContent = `${date}: ${title}`;
    article.appendChild(header);
    parag.textContent = body;
    article.appendChild(parag);

    main.insertBefore(article, main.firstChild);
    contains = document.querySelector('main').children.length;
    counterHandler();
});


