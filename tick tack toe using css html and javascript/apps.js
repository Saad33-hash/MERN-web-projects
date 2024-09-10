let btn=document.querySelectorAll(".gamebutton");
let rstbtn=document.querySelector(".reset");
let msgcontainer=document.querySelector(".messagecontainer");
let msg=document.querySelector(".winnermessage");
let rcontainer=document.querySelector(".restartmessage");
let rbutton=document.querySelector(".restartbutton");

// for keeping track of turns of player
let turnO=true; // playerX,playerO


//keeping track of winning patterns
//2d Array
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]

const restartgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    rcontainer.classList.add("hide");
}

const enableboxes=()=>{
    for(let gamebutton of btn){
gamebutton.disabled=false;
gamebutton.innerText="";
    }
    
}
// when reset or restart buuton is trigered
rbutton.addEventListener("click",restartgame);
rstbtn.addEventListener("click",restartgame);

//addingevent listener to know when the box was clicked
btn.forEach((gamebutton) =>{
    gamebutton.addEventListener("click",()=>{
        console.log("button was clicked");
        //giving text to innrboxes
       /* gamebutton.innerText  ="abcd"; */
       if(turnO){
        // player O
        gamebutton.innerText="O";
        turnO=false; //so agin it will not print O
       }
       else{
        //PLAYER X
        gamebutton.innerText="X";
        turnO=true; // so that il will not print X agian
       }
       gamebutton.disabled=true;

       checkWinner();
    });
});
const disablebutton=()=>{
    for(let gamebutton of btn){
        gamebutton.disabled=true;
    }

}
//showwinner function
const showWinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    rcontainer.classList.remove("hide");
    disablebutton();


}

//to check who is the winner
const checkWinner=()=>{
    for(let pattern of winPattern){
       let posvalue1=btn[pattern[0]].innerText;
       let posvalue2=btn[pattern[1]].innerText;
       let posvalue3=btn[pattern[2]].innerText;
    
    // we have to check if there is no space cuz in that case we cant decide a winner
    if(posvalue1 != "" && posvalue2 != "" && posvalue3 != ""){
        //when all condittions get staisfied

        if(posvalue1 === posvalue2 && posvalue2 === posvalue3){
            console.log("winner",posvalue1);
            showWinner(posvalue1);
        }
    }
    }
}