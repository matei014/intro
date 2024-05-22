function resizing(){
E= window.innerWidth;
document.getElementById("p1").innerHTML= E + " pixels"
var r= Math.floor(Math.random()*256)
var g= Math.floor(Math.random()*256)
var b= Math.floor(Math.random()*256)
var x= "rgb(" +r+ "," +g+ "," +b+ ")";
console.log(x)
document.body.style.background= x
}

window.onload= resizing;
window.onresize= resizing;

