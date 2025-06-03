const subscribeBtn = document.getElementById("subscribeBtn");
const message = document.getElementById("message");

var flag = 1;
function sizeFunction() {
    let idea = 30;
    if (flag === 1) {
        document.getElementById("bg1").style.width = `${idea}%`;
        flag=-1;
    } else {
        document.getElementById("bg1").style.width = "50%";
        flag=1;
    }
}

document.addEventListener('mousemove', function(event) {
  document.getElementById("mouse").style.left = event.clientX + 'px';
  document.getElementById("mouse").style.top = event.clientY + 'px';
});



 let elem = document.querySelector('.mover'), 
     div = document.querySelector('.move'), 
     x = 0, 
     y = 0, 
     mousedown = false; 
  
 // div event mousedown 
 div.addEventListener('mousedown', function (e) { 
     // set mouse state to true 
     mousedown = true; 
     // subtract offset 
     x = div.offsetLeft - e.clientX; 
     y = div.offsetTop - e.clientY; 
     e.preventDefault(); // prevent browser's default drag behavior 
 }, true); 
  
 // div event mouseup 
 document.addEventListener('mouseup', function (e) { // Notice the change here 
     // set mouse state to false 
     mousedown = false; 
 }, true); 
  
 // element mousemove to stop 
 elem.addEventListener('mousemove', function (e) { 
     // Is mouse pressed? 
     if (mousedown) { 
         // now we calculate the difference 
         div.style.left = e.clientX + x + 'px'; 
         div.style.top = e.clientY + y + 'px'; 
     } 
 }, true); 