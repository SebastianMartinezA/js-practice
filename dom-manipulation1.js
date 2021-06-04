const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'El genio del futbol mundial';

container.appendChild(content);

const content1 = document.createElement('p');
content1.classList.add('redp');
content1.textContent = 'Hey im red';
content1.style.color = 'red';

container.appendChild(content1);

const h3 = document.createElement('h3');
h3.classList.add('blueh3');
h3.textContent = 'Im a blue h3!';
h3.style.color = 'blue';

container.appendChild(h3);

const div1 = document.createElement('div');
div1.setAttribute('id', 'div1');
div1.style.borderColor = 'black';
div1.style.border = '5px solid';
div1.style.padding = '16px';
div1.style.backgroundColor = 'pink';

container.appendChild(div1);

const contaiment = document.querySelector('#div1');

const h1 = document.createElement('h1');
h1.classList.add('h1insidecontainer');
h1.textContent = 'Im in a div';

contaiment.appendChild(h1);

const p1 = document.createElement('p');
p1.classList.add('pinsidecontainer');
p1.textContent = 'ME TOO!';

contaiment.appendChild(p1);