const catFiles = ['cat1.png', 'cat2.jpg', 'cat3.jpg', 'cat4.png', 'cat5.jpg', 'cat6.jpg'];
const catNames = ['Garfield', 'Lion-O', 'Snarf', 'Kathy', 'Leo', 'Batman'];

function Cat(name) {

  const newCat = document.createElement('img');
  newCat.src = 'cats/' + catFiles[ parseInt( Math.random() * catFiles.length ) ];
  newCat.title = 'My name is ' + name;
  newCat.classList.add('cat');

  newCat.addEventListener('click', playAudio);

  return newCat;
}

function createCats() {
  deleteAllCats();
  const numCats = parseInt(document.querySelector('#catsInput').value);

  for (let i = 0; i < numCats; i++){
    // The name is the only parameter needed to create a cat!
    const name = catNames[ parseInt( Math.random() * catNames.length ) ];
    const newCat = new Cat(name);
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

