let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#newreset");
let msgcontainer=document.querySelector(".msgcontainner");
let msg=document.querySelector("#msg");

let turn=true;
const winpatt=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was click");
        if(turn){
            box.innerText="0";
            turn=false;
        }
        else{
            box.innerText="x";
            turn=true;
        }
        box.disabled=true;
        checkwin();
    });
});
//agr winner ajai to sare boxes disable hojai
const disablebox=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner)=>{
    msg.innerText='congratulations winner is '+ winner;
    msgcontainer.classList.remove("hide")
   disablebox();//yaha se call hogi disable ki
};
const checkwin=()=>{
    for(let pattern of winpatt){
        let v1=boxes[pattern[0]].innerText;
           let v2= boxes[pattern[1]].innerText;
           let v3= boxes[pattern[2]].innerText;
           if(v1 !="" && v2 !="" && v3 !="" ){
            if(v1 === v2 && v2 == v3 )
         {
            console.log("winner!",v1);
            showWinner(v1);//yaha winner show hojaiga
         }
           }
        
    }
};

//reset all game
//agr game dobara shoru ho to sare boxes enable hoai
const enablebox=()=>{
    for (let box of boxes){
        box.disabled=false;
        //phle hume sare boxes khali krne parega
box.innerText="";
    }
}

const resetgame=()=>{
    turn=true;
    enablebox();
    msgcontainer.classList.add("hide");
};
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);