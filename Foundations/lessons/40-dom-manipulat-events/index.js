const mainContainer = document.querySelector('#container');

const mainHeader = document.querySelector('h1');
mainHeader.classList.add('main-header');
mainHeader.style.color = 'green';

const divForText = document.createElement('div');
divForText.classList.add('text');
divForText.textContent = 'This is the glorious text-content!';
mainContainer.appendChild(divForText);

const redPara = document.createElement('p');
redPara.classList.add('red');
redPara.textContent = "Hey, I'm red!";
redPara.style.fontWeight = 'bold';
redPara.style.color = 'red';
mainContainer.appendChild(redPara);

const blueHeader = document.createElement('h3');
blueHeader.classList.add('blue');
blueHeader.textContent = "I'm blue h3!";
blueHeader.style.color = 'blue';
mainContainer.appendChild(blueHeader);

const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pink');
pinkDiv.style.marginBottom = '20px';
pinkDiv.style.padding = '15px';
pinkDiv.style.width = '25%';
pinkDiv.style.border = '1px solid black';
pinkDiv.style.backgroundColor = 'pink';
mainContainer.appendChild(pinkDiv);

const innerHeader = document.createElement('h1');
innerHeader.classList.add = 'inner';
innerHeader.textContent = "I'm in the pink div!";
innerHeader.style.color = 'white';
pinkDiv.appendChild(innerHeader);

const meTooPara = document.createElement('p');
meTooPara.classList.add('me-too');
meTooPara.textContent = 'ME TOO!';
meTooPara.style.color = 'green';
meTooPara.style.textAlign = 'right';
pinkDiv.appendChild(meTooPara);

const junBtn = document.querySelector('button');
junBtn.classList.add('j-btn');
junBtn.style.marginRight = '10px';
junBtn.style.border = 'none';
junBtn.style.padding = '10px';
junBtn.style.color = 'red';
junBtn.style.background = 'transparent';
junBtn.style.backgroundColor = 'yellow';
junBtn.style.cursor = 'pointer';

const devBtn = document.querySelector('#btn');
devBtn.addEventListener('click', () => {
  alert('Hello, Dev Master!!');
});
devBtn.style.border = 'none';
devBtn.style.padding = '10px';
devBtn.style.color = 'teal';
devBtn.style.background = 'transparent';
devBtn.style.backgroundColor = 'lime';
devBtn.style.cursor = 'pointer';

// ? на кого нажали / тому цвет и поменяли
devBtn.addEventListener('click', function (e) {
  console.log(e.target);
  e.target.style.color = 'red';
  e.target.style.background = 'yellow';
});
