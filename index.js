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



// Function to check for a win
const checkWin = ()=>{
    let itemtext = document.getElementsByClassName('itemtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((itemtext[e[0]].innerText === itemtext[e[1]].innerText) && (itemtext[e[2]].innerText === itemtext[e[1]].innerText) && (itemtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = itemtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
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