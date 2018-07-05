const catFiles = ['cat1.png', 'cat2.png', 'cat3.jpg', 'cat4.png', 'cat5.png', 'cat6.png'];

function Cat(cat) {
  const newCat = document.createElement('img');
  newCat.src = 'cats/' + cat;
  newCat.classList.add('cat');

  return newCat;
}

function createCats() {
  const numCats = parseInt(document.querySelector('#catsInput').value);

  for (let i = 0; i < numCats; i++){
    const catFile = catFiles[ parseInt( Math.random() * 6 ) ];
    const newCat = new Cat(catFile);
    document.querySelector('.cat-container').appendChild(newCat);
  }
}

