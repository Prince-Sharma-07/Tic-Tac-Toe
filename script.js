let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGamebtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turn0){
        box.innerText = "O";
        turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        checkWinner(count);
    });
});

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
   for(let box of boxes){
     box.disabled = true;
   }
}

const enableBoxes = () => {
    for(let box of boxes){
      box.disabled = false;
      box.innerText = "";
    }
 }

const showWinner = (winner) => {
    if(winner === "Draw"){
        msg.innerText = "Draw!!! Try again ?";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
    else{
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
    }
}

const checkWinner = (count) => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
            }
            else if(count === 9){
                showWinner("Draw")
            }
        }
    }
};

newGamebtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);