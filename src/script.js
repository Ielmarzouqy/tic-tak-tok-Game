let currentPlayer = "X";
let lastMoves = [];
let lastXMoves = [];
let lastOMoves = [];


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

let scoreX =0;
let scoreO =0;


function storePlayers() {
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');
  let playerX = document.getElementById("playerx").value;
  let playerO = document.getElementById("playero").value;

  localStorage.setItem("playerXName", playerX);
  localStorage.setItem("playerOName", playerO);
  
  let p1 = localStorage.getItem("playerXName");
  let p2 = localStorage.getItem("playerOName");

  player1.innerHTML = p1;
  player2.innerHTML = p2;
}

function getWinner(){
  const scoreXElement = document.getElementById('score1');
  const scoreOElement = document.getElementById('score2HJ');
  
  if(currentPlayer=="O"){
    scoreX++;
    console.log(scoreX);
    localStorage.setItem("scoreP1",scoreX);
    let scorej1=localStorage.getItem("scoreP1");
   scoreXElement.innerHTML=scorej1;
   setTimeout( function (){
    clearBoard();

   },100)
  
  }else if(currentPlayer == "X"){
    scoreO++;
    console.log(scoreO);
    localStorage.setItem("scoreP2",scoreO);
    let scoreP2=localStorage.getItem("scoreP2");
    scoreOElement.innerHTML=scoreP2;
    setTimeout( function (){
      clearBoard();
     },100)
  } 
}

function clearBoard(){
  showPopup() ;
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell=>{
    while(cell.firstChild){
      cell.removeChild(cell.firstChild);
      lastXMoves = [];
      lastOMoves = [];
    }
 

  })
}

function validation(){
  let player1X = document.getElementById('playerx').value;
  let player2O = document.getElementById('playero').value;
  let error = document.getElementById('error');

  if((player1X == '') || (player2O == '')){
    error.classList.remove('hide');
  }else{
    error.classList.add('hide');
    startGame()
  }
}

  function startGame(){
    let infoPage = document.getElementById('first-page'); 
    console.log(infoPage);
    infoPage.classList.add('hide');
    let board = document.getElementById('board');
    board.classList.remove('hide');
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('hide');
    
    storePlayers();
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
  let  scoreP1X = parseInt(localStorage.getItem("scoreP1"));
  let scoreP2O = parseInt(localStorage.getItem("scoreP2"));

function scorePage() {
  let s1 = document.getElementById('s1');
  let s2 = document.getElementById('s2')

 s1.innerHTML = scoreP1X;
 s2.innerHTML = scoreP2O;

  let board = document.getElementById('board');
  board.classList.add('hide');
  let sidebar = document.getElementById('sidebar');
  sidebar.classList.add('hide');
  let score = document.getElementById('score');
  score.classList.remove('hide');
  setTimeout(function (){
    location.reload();
  }, 2000)
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
        getWinner();
      }
    } else {
      setIcono(cell);
      currentPlayer = "X";
      if(checkIfWin(move,lastOMoves)){
        console.log("O wins");
        getWinner();
      }
    }
  }
}


function generatePossibilities(number ){
    let possibilies = [];   
    possibilies = getXPossibilities(possibilies,number);
    possibilies = getYPossibilities(possibilies,number);
    possibilies = getDRPossibilities(possibilies,number);
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

function replay(){
  location.reload();
}



function showPopup() {
  const winnerPopup = document.getElementById("winner-popup");
    const winnerNameX = localStorage.getItem("playerXName");
    const winnerNameO = localStorage.getItem("playerOName");

    // localStorage.getItem("playerOName");
    if( currentPlayer =='O'){
      document.querySelector(".winner-name").textContent = winnerNameX;

    }else{
      document.querySelector(".winner-name").textContent = winnerNameO;

    }

    console.log(winnerPopup)

    winnerPopup.classList.remove("hide");
    setTimeout(() => {
        winnerPopup.classList.add("hide");
    }, 3000); 
}
