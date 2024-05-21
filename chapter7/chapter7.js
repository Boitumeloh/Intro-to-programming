"use strict";
// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("head").style.transform = "rotate(-15deg)";
// document.getElementById("body").style.border = "2px black solid";

// // Round the corners of his mouth.
// document.getElementById("mouth").style.borderRadius = "4px";

// // Put yellow dots around his right eye.
// document.getElementById("righteye").style.border = "4px yellow dotted";

// // Change his left arm’s color.
// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";

// // Change the text color.
// document.getElementById("body").style.color = "#FF0000";

// // Give Douglas hair.
// document.getElementById("head").style.borderTop = "5px black solid";

// //make his nose round
// document.getElementById("nose").style.borderRadius = "50px";

// //right arm color
// document.getElementById("rightarm").style.backgroundColor = "green";

let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");


rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click",moveRightLeft);

alert("click on the eyes and the rightarm to make the robot do some moves!")
function moveUpDown(e){
    let robotPart = e.target;
    let top = 0;
    
    let animation = setInterval(frame, 10); 

    function frame(){
        robotPart.style.top = top + "%";
        top++;

        if(top === 20){
            clearInterval(animation);
        }
    }
}


function moveRightLeft(e){
    let robotPart = e.target;
    let left = 0;
    
    let animation = setInterval(frame, 10); 

    function frame(){
        robotPart.style.left = left + "%";
        left++;

        if(left === 70){
            clearInterval(animation);
        }
    }
}
