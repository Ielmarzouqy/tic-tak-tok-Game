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

function setIconx(cell){
    let icon = document.createElement('img');
    icon.setAttribute('src', './src//images/x.png');
    icon.setAttribute('class', 'icon');
    cell.append(icon);
   

}

function setIcono(cell){
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



function checkWinnerAxeX(arr) {
  const possibility = [1, 2, 3, 4, 5];
  for (let i = 0; i <= arr.length - 5 ; i++) {
    const subarray = arr.slice(i, i + 5);
    const differences = subarray.map((val, index) => val - subarray[0]);

    if (possibility.includes(differences[1]) &&
        differences.every((diff, index) => diff === differences[0] + index)) {
      return subarray;
    }
  }
  
  return [];
}

function handleClick(event, cell) {
  if (!cell.hasChildNodes()) {
    lastMoves.push(parseInt(cell.getAttribute('data-value')));
    let arraySorted = lastMoves.sort(function(a,b){return a-b});
    const result = checkWinnerAxeX(lastMoves );

    if (currentPlayer === "X") {
      setIconx(cell);
      currentPlayer = "O";

      if (result.length > 0) {
        console.log("Winner is the player X", result);
      } else {
        console.log(lastMoves, arraySorted);
      }
    } else {
      setIcono(cell);
      currentPlayer = "X";

      if (result.length > 0) {
        console.log("Winner is the player O", result);
      } else {
        console.log(lastMoves);
      }
    }
  }
}
