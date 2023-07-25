"use strict"

let count = 0;

const countEl = document.querySelector(".count-el");
const resetBtn = document.querySelector("#Reset");

resetBtn.addEventListener("click",reset)

function increment(){
     count++;
     countEl.innerHTML = count;
}

function decrement(){
     count--;
     if(count < 0){
          count = 0;
     }
     countEl.innerHTML = count;
}

function reset(){
     count = 0;
     countEl.innerHTML = count;
}
