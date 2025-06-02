const subscribeBtn = document.getElementById("subscribeBtn");
const message = document.getElementById("message");

var flag = 1;
function myFunction() {
  if (flag === 1) {
    document.getElementById("demo").innerHTML = "Paragraph changed!";
    flag=-1;
  } else {
  document.getElementById("demo").innerHTML = "No result... again";
    flag=1;
  }
}

function sizeFunction() {
    let idea = 30;
    if (flag === 1) {
        // document.getElementById("bg1").style.width = `${idea}%`;
        for (let i = 0; i < 10; i++) {
            idea += 5;
            document.getElementById("bg1").style.width = `${idea}%`;
            document.getElementById("demo").innerHTML = i;
        }

        flag=-1;
    } else {
        document.getElementById("bg1").style.width = "50%";
        flag=1;
    }
}