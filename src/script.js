let currentPlayer = "X";
let lastMoves = [];
const possibleWinSequences = [
        [1, 2, 3, 4, 5],
        [20, 40, 60, 80, 100], 
        [21, 42, 63, 84, 105], 
        [19, 38, 57, 76, 95], 
      ];

const startButton = document.getElementById('start');
   

document.addEventListener('DOMContentLoaded',()=>{
    let board = document.getElementById('board');
    for(let i=1; i<=400;i++){
        let cell = document.createElement('div');
        cell.setAttribute('class','cell');
        cell.setAttribute('id', 'cell');
        cell.setAttribute('data-value',i);
        board.append(cell);
        cell.addEventListener('click', (event) => handleClick(event, cell));
    }
})

  function startGame(){
    let infoPage = document.getElementById('first-page'); 
    console.log(infoPage);
    infoPage.classList.add('hide');
    let board = document.getElementById('board');
    board.classList.remove('hide');
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('hide');
  }

  function checkWin() {
    const sortedMoves = lastMoves.slice().sort((a, b) => a - b);
      const sortedMovesString = sortedMoves.join('');  // arry of moves changed to string
                if (sortedMovesString) {
        for (let i = 0; i < sortedMoves.length - 4; i++) {
            if (
              sortedMoves[i + 1] === sortedMoves[i] + 1 &&
              sortedMoves[i + 2] === sortedMoves[i] + 2 &&
              sortedMoves[i + 3] === sortedMoves[i] + 3 &&
              sortedMoves[i + 4] === sortedMoves[i] + 4 ||
              sortedMoves[i + 1] === sortedMoves[i] + 20 &&
              sortedMoves[i + 2] === sortedMoves[i] + 40 &&
              sortedMoves[i + 3] === sortedMoves[i] + 60 &&
              sortedMoves[i + 4] === sortedMoves[i] + 80 ||
              sortedMoves[i + 1] === sortedMoves[i] + 21 &&
              sortedMoves[i + 2] === sortedMoves[i] + 42 &&
              sortedMoves[i + 3] === sortedMoves[i] + 63 &&
              sortedMoves[i + 4] === sortedMoves[i] + 84 ||
              sortedMoves[i + 1] === sortedMoves[i] + 19 &&
              sortedMoves[i + 2] === sortedMoves[i] + 38 &&
              sortedMoves[i + 3] === sortedMoves[i] + 57 &&
              sortedMoves[i + 4] === sortedMoves[i] + 76
            ) {
              console.log('Player wins!',  sortedMoves[i],sortedMoves);
            }  
      }
      }
 
}
function handleClick(event, cell) {
  if (!cell.hasChildNodes()) { 
    lastMoves.push(parseInt(cell.getAttribute('data-value')));
    if (currentPlayer === "X") {
      setIconx(cell);
      currentPlayer = "O"; 
    } else {
      setIcono(cell);
      currentPlayer = "X";
    }
    if (lastMoves.length > 4) {
      checkWin();
      console.log(lastMoves);
      lastMoves.shift();
    }
  }
}
 



function setIconx(cell){
    // let cell = document.getElementById('cell');
    let icon = document.createElement('img');
    icon.setAttribute('src', './src//images/x.png');
    icon.setAttribute('class', 'icon');
    cell.append(icon);
   

}

function setIcono(cell){
    // let cell = document.getElementById('cell');
    let icon = document.createElement('img');
    icon.setAttribute('src', './src//images/o.png');
    icon.setAttribute('class', 'icon');
    cell.append(icon);

}

function score() {
  
  let board = document.getElementById('board');
  board.classList.add('hide');
  let sidebar = document.getElementById('sidebar');
  sidebar.classList.add('hide');
  let score = document.getElementById('score');
  score.classList.remove('hide');
}
