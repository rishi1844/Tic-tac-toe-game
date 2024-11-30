let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg-container");
let p = document.querySelector("#msg");

let turn = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetBtn = () => {
    turn = true;
    enabledBtn();
    msg.classList.add("hide");
}

box.forEach((x) => {
    x.addEventListener("click", ()=> {
        if(turn){
            x.innerHTML = "0";
            turn = false;
        }
        else{
            x.innerHTML = "X";
            turn = true;
        }
        x.disabled = true;

        checkWinner();
    });
});


const disabledBtn = () => {
    for(let x of box){
        x.disabled = true;
    }
}

const enabledBtn = () => {
    for(let x of box){
        x.disabled = false;
        x.innerText = ""; 
    }
}

const showWinner = (winner) => {
    p.innerText = `🎉 Congratulations! Winner is ${winner} 🎉`;
    msg.classList.remove("hide");
    msg.classList.add("show-animation");
    // disabledBtn();
};


const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
            }
        }
    }
};


reset.addEventListener("click", resetBtn);
newBtn.addEventListener("click", resetBtn);