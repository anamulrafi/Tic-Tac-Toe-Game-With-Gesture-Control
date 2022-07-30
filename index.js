console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X";
let isgameover = false;

// Function to change the turn (x-0-x)
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

//Function to check for a win
const checkWin = () =>{

}
// Game Logic

// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let itemtext = element.querySelector('.itemtext');
    element.addEventListener('click', ()=>{
        if(itemtext.innerText === ''){
            itemtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})