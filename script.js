const prevbtn=document.querySelector("#prevbtn");
const nextbtn=document.querySelector("#nextbtn");
const book=document.querySelector("#book");

const paper1=document.querySelector("#p1");
const paper2=document.querySelector("#p2");
const paper3=document.querySelector("#p3");
const paper4=document.querySelector("#p4");

//event listening
prevbtn.addEventListener("click",goprevpage);
nextbtn.addEventListener("click",gonextpage);

let current=1;
let num=4;
let max=num+1;
function openbook(){
    book.style.transform="translateX(50%)";
    prevbtn.style.transform="translate(-300px)";
    nextbtn.style.transform="translateX(300px)";


}
function closebook(t){
    if(t){
        book.style.transform="translateX(0%)";
    }
    else{
        book.style.transform="translateX(100%)"
    }

}  
function goprevpage(){
    if(current>1){
        switch(current){
            case 2:
                closebook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex=4;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex=3;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex=2;
            case 5:
                openbook();
                paper4.classList.remove("flipped");
                paper4.style.zIndex=1;
                break;
            default:
                throw new Error("unknown state");


        }
        current--;
    }
 

}
function gonextpage(){
    if(current<max){
        switch(current){
            case 1:
                openbook();
                paper1.classList.add("flipped");
                paper1.style.zIndex=1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex=2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex=3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex=4;
                closebook(false);
                break;
            default:
                throw new Error("unknown state");
           
        
        }
        current++;
    }

}