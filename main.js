var lastPositionOfX, lastPositionOfY;
cor ="red";
largura = 2;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var width = screen.width;
novaWidth = screen.width - 70;
novaHeight = screen.height - 300;
if(width < 992){
    document.getElementById("myCanvas").widht = novaWidth;
    document.getElementById("myCanvas").height = novaHeight;
    document.body.style.overflow = "hidden";

}
canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(e){
    console.log("myTouchStart");
    color = document.getElementById("cor").value;
  widthOfLine = document.getElementById("largura").value;
  lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
  lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchMove", myTouchMove);

function myTouchMove(e){
    console.log("myTouchMove")
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
 
    console.log("Última posição das coordenadas x e y = ");
    console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
    ctx.moveTo(lastPositionOfX, lastPositionOfY);
 
    console.log("Posição atual das coordenadas x e y = ");
    console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();
 
    lastPositionOfX = currentPositionOfTouchX;
    lastPositionOfY = currentPositionOfTouchY;
   
    
}
 
   
function limpar() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
