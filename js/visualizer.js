var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");


var image = new Image();
image.src = "img/tshirt.png";

$("#background-btn").click(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);  
})
