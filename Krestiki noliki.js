var tds = document.querySelectorAll('td');
var isX = true;
var cur = document.querySelector("#current-player");

tds.forEach(function setTile(td) {
	td.addEventListener('click', function() {
  	td.textContent = isX ? 'X' : 'O';
    isX = !isX;
    cur.textContent = isX ? 'X' : 'O';
  })
})

// var to hold new game button element
var newGame = document.querySelector('.new-game');

// a click event listener for new game button element
newGame.addEventListener('click', function() {
	tds.forEach(function(td) {
  	td.textContent = "";
  })
})