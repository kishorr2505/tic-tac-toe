let boxes = document.querySelectorAll(".btn");

let resett= document.querySelector(".reset");

let turn = true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("boxes clicked");

        if(turn){
            box.innerText = "O";
            turn = false;
        }else{
            box.innerText = "X";
            turn = true;
        }

        box.disabled = true; 
        checkWinner();
    });
});

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1  = boxes[pattern[0]].innerText;
        let pos2  = boxes[pattern[1]].innerText;
        let pos3  = boxes[pattern[2]].innerText;

        if(pos1 !="" &&pos2 !="" &&pos3 !="" ){
            if(pos1 ==pos2 && pos2==pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }
};

let show = document.querySelectorAll(".hide");
let msg = document.querySelector(".winner-msg");
const showWinner =(winner)=>{
    msg.innerText = `Congratulation, winner is ${winner}`;
    // show.setAttribute("class","");
    show[0].classList.remove("hide");
    show[1].classList.remove("hide");
    disableBoxes();
};

let newgame = document.querySelector("#newgame");

const resetGame =() =>{
   
        turn = true; 
        enableBoxes();
        show[0].classList.add("hide");
        show[1].classList.add("hide");
        
 
    
};


const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
        console.log('box disabled');
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
};

newgame.addEventListener("click",resetGame);
resett.addEventListener("click",resetGame);