function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector( '#nested .target' );
}

function increaseRankBy(n) {
  const ls = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < ls.length; i++) {
    ls[i].textContent = parseInt(ls[i].textContent) + n;
  };

};

function deepestChild() {
  return document.querySelector( '#grand-node div div div div');
}
