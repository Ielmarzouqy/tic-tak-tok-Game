let currentPlayer = "X";
let lastMoves = [];
let lastXMoves = [];
let lastOMoves = [];
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
    // sidebar.classList.remove('hide');
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
                      
  console.log("checkWinner")
  for (let i = 0; i <= arr.length - 5 ; i++) {
    const subarray = arr.slice(i, i + 5);
    const differences = subarray.map((val, index) => val - subarray[0]);
    
    if ( possibility.includes(differences[1]) &&
        differences.every((diff, index) => diff === differences[0] + index ) 
        
        ) {
      return subarray;
    }
  }
  return [];
}

function handleClick(event, cell) {
  if (!cell.hasChildNodes()) {
    let move = parseInt(cell.getAttribute('data-value'));
    console.log(move)
    if (currentPlayer === "X") {
      
      setIconx(cell);
      currentPlayer = "O";

      if(checkIfWin(move,lastXMoves)){
        console.log("x wins");
      }
    } else {
      setIcono(cell);
      currentPlayer = "X";
      if(checkIfWin(move,lastOMoves)){
        console.log("O wins");
      }
      
    }
  }
}


function generatePossibilities(number ){
    let possibilies = [];   
    // possibilies = getXPossibilities(possibilies,number);
    // possibilies = getYPossibilities(possibilies,number);
    // possibilies = getDRPossibilities(possibilies,number);
    possibilies = getDLPossibilities(possibilies,number);




  console.log(possibilies);
    return possibilies;
}

function getXPossibilities(possibilies, number){
  let helper = number%20;
  if(number%20 > 4){
    helper = 4
  }
  for(let j = helper; j >=helper - 4 ;j--){
    let arr = [];
    for(let i = j; i >= j-4; i--){
      if(arr.length < 5 && number%20 - i >= 1 && number%20 - i <= 20){
        arr.push(number - i);
      }
    }
    if(arr.length == 5 && arr.includes(number)){
      possibilies.push(arr);
    }
  }
  return possibilies;
}

function getYPossibilities(possibilies, number){
  let helper = Math.floor(number /20);
  if(number /20 > 4){
    helper = 4
  }


  for(let j = helper; j >=helper - 4 ;j--){
    let arr = [];
    for(let i = j; i >= j-4; i--){
      if(arr.length < 5 && number - 20*i >= 1 && number - 20*i <= 400){
        arr.push(number - 20*i);
      }
    }
    if(arr.length == 5 && arr.includes(number)){
      possibilies.push(arr);
    }
  }

  return possibilies;
}


function getDRPossibilities(possibilies, number){
  let helper = number %20;
  if(number%20 > 4){
    helper = 4
  }


  for(let j = helper; j >=helper - 4 ;j--){
    let arr = [];
    for(let i = j; i >= j-4; i--){
      if(arr.length < 5 && number - (20*i+ i) >= 1 && number -(20*i +i)  <= 400){
        arr.push(number - (20*i +i));
      }
    }
    if(arr.length == 5 && arr.includes(number)){
      possibilies.push(arr);
    }
  }

  return possibilies;
}

function getDLPossibilities(possibilies, number){
  let helper = number %20;
  if(number%20 > 4){
    helper = 4
  }


  for(let j = helper; j >=helper - 4 ;j--){
    let arr = [];
    for(let i = j; i >= j-4; i--){
      if(arr.length < 5 && number - (20*i - i) >= 1 && number -(20*i - i)  <= 400){
        arr.push(number - (20*i -i));
      }
    }
    if(arr.length == 5 && arr.includes(number)){
      possibilies.push(arr);
    }
  }

  return possibilies;
}




// generatePossibilities(22);

function checkIfWin(number,moves){
  moves.push(number);
  let possibilies = generatePossibilities(number);
  for(let i =0;i<possibilies.length ;i++){
    if(
      moves.includes(possibilies[i][0]) 
      && moves.includes(possibilies[i][1])
      && moves.includes(possibilies[i][2])
      && moves.includes(possibilies[i][3])
      && moves.includes(possibilies[i][4])

    ){
      return true;
    }
  }
  return false;

}

// console.log(checkIfWin(22,[21,43,44,85,89,64,106,83,1]))
// console.log(checkIfWin(37,[21,58,44,85,79,64,100,121,142]))