let countContainer=document.getElementById(`countContainer`)
let minus=document.getElementById(`minus`)
let plus=document.getElementById(`plus`)
let count=document.getElementById(`count`)

let counter={theCount:0}


countContainer.addEventListener(`click`,actionNow)
function actionNow(event){
let myTarget=event.target
let myAction=myTarget.dataset.action
if(myAction===`minus`){
    decrease()
}
if(myAction===`plus`){
    increase()
}

}


function increase(){
    ++counter.theCount
 updateCountDisplay()
    
}

function decrease(){
    --counter.theCount
  updateCountDisplay()
    
    
}

function updateCountDisplay() {
    count.textContent = counter.theCount;

    if (counter.theCount > 0) {
        count.style.color = 'green';
    } else if (counter.theCount < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'black'; // Assuming neutral color for zero
    }
}

