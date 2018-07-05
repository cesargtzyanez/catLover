const catFiles = ['cat1.png', 'cat2.png', 'cat3.jpg', 'cat4.png', 'cat5.png', 'cat6.png'];

function Cat(cat) {
  const newCat = document.createElement('img');
  newCat.src = 'cats/' + cat;
  newCat.classList.add('cat');

  return newCat;
}

function createCats() {
  deleteAllCats();
  const numCats = parseInt(document.querySelector('#catsInput').value);

  for (let i = 0; i < numCats; i++){
    const catFile = catFiles[ parseInt( Math.random() * 6 ) ];
    const newCat = new Cat(catFile);

    newCat.addEventListener('click', playAudio);

    document.querySelector('.cat-container').appendChild(newCat);
  }
}

function deleteAllCats() {
  const catList = document.querySelector('.cat-container');
  while (catList.hasChildNodes()){
    catList.removeChild( catList.firstChild );
  }
}

function playAudio() {
  const audio = document.querySelector('#audio');
  audio.play();
}

