let boxes =document.querySelectorAll(".box");
let resetbtn =document.querySelector("#resetbutton");
let newgamebtn =document.querySelector("#newbutton");
let msgcontainer =document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turnO = true;//playerX playerY

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];

const resetgame=() =>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=> {
    box.addEventListener("click",() => {
       console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled =true;

        checkWinner();
    });
});

const disabledboxes=() =>{
    for(box of boxes)
    {
        box.disabled=true;
    }
}

const enableboxes=() =>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner =(winner) =>{
    msg.innerText =`Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

 const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1 =boxes[pattern[0]].innerText;
        let pos2 =boxes[pattern[1]].innerText;
        let pos3 =boxes[pattern[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !==""){
            if(pos1 == pos2 && pos2 == pos3){
               // console.log("winner");
                showWinner(pos1);
            }
        }
 }
 };
 
newbutton.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);