
let currentPlayer = "X";
let lastMoves = [];
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

function handleClick(event, cell) {
    if (!cell.hasChildNodes()) { 
      if (currentPlayer === "X") {
        setIconx(cell);
        currentPlayer = "O"; 
      } else {
        setIcono(cell);
        currentPlayer = "X";
      }

      lastMoves.push(parseInt(cell.getAttribute('data-value')));
      if (lastMoves.length > 4) {
        checkWin()
          console.log(lastMoves);
          lastMoves.shift();
      }      
    }
  }
  function checkWin() {
    const sortedMoves = lastMoves.slice().sort((a, b) => a - b);
      const sortedMovesString = sortedMoves.join('');
      if (sortedMovesString) {
        // console.log('Player wins!');
        for (let i = 0; i < sortedMoves.length - 4; i++) {
            if (
              sortedMoves[i + 1] === sortedMoves[i] + 1 &&
              sortedMoves[i + 2] === sortedMoves[i] + 2 &&
              sortedMoves[i + 3] === sortedMoves[i] + 3 &&
              sortedMoves[i + 4] === sortedMoves[i] + 4
            ) {
              console.log('Player wins!', sortedMoves);
            }    
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
