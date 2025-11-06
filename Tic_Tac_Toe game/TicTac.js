const boxes = document.querySelectorAll(".box")
let playerX = true
let winMsg = document.querySelector(".hide")
let resetBtn = document.querySelector("#reset-btn")

const winnigPattern = [ 
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playerX)
        {
            box.innerHTML="X";
            playerX=false;
        }
        else{
            box.innerHTML="O";
            playerX=true;
        }
        box.disabled = true;
        checkWinner();
    })
})


const showWinner = function (p1val){

    winMsg.innerHTML=`Congratulation winner is ${p1val}`;
    winMsg.className="visible";
    for(let box of boxes){
        box.disabled=true;
    }
       resetBtn.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerHTML=""
        box.disabled=false;
    }  
    winMsg.className="hide" 
    })

}

const checkWinner = ()=>{

    for(let pattern of winnigPattern){
        
        let p1val = boxes[pattern[0]].innerHTML
        let p2val = boxes[pattern[1]].innerHTML
        let p3val = boxes[pattern[2]].innerHTML

        if(p1val != "" && p2val != "" && p3val != ""){
            if(p1val == p2val && p2val == p3val)
            {
                showWinner(p1val);
            }
        }
    }
}


