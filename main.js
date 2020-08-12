'use strict'

console.log("loading main.js")

for(let i=0; i<10; i++){
    console.log()
}

// This is how we fetch our button
let theAddButton = document.getElementById("addButton")

// Adding an event listener takes on two parts. The kind of event
// and what to do when the button is called upon
theAddButton.addEventListener('click', function(){
console.log("Button got clicked");
// When the button gets clicked we will read the input from the input
// box
let inputBox = document.getElementById("inputBox")
let item = inputBox.value;
console.log("the input is", inputBox.value);

let theList = document.getElementById
// This will create an li element
let li= document.createComment("li");
// I want to add text
li.innerText = item;

// I want to fetch the ul element
let myList = document.getElementById("theList")

// I want to attach elements to my dom
myList.appendChild(li);


inputBox.value= '';
addLiEvent(li);


// I want to add a "click" event to the new li if the li
// is already marked as completed it will un-strike it
// If this li is not already marked as completed. it will complete it 
function addLiEvent(li){
    li.addEventListener('click', function(){
        let classes = li.classList;
        if(classList.remove("done")){
    
        }else {
            li.classList.add("done")
        }
    })

}
})