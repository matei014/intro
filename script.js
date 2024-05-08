function resizing(){
E= window.innerWidth;
document.getElementById("p1").innerHTML= E + " pixels"
}

window.onload= resizing;
window.onresize= resizing;