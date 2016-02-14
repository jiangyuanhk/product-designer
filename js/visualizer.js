
var canvas = new fabric.Canvas('canvas');
var ctx = canvas.getContext("2d");

backgroundImg = "img/tshirt.png";


$(document).ready(function(){
  //background button would add background to the canvas
  $('#background-btn').click(function() {
    canvas.setBackgroundImage(backgroundImg, canvas.renderAll.bind(canvas), {
      width: canvas.width,
      height: canvas.height,
      // Needed to position backgroundImage at 0/0
      originX: 'left',
      originY: 'top'
    });
  });

  $('#text-btn').click(function() {
    var t = new fabric.IText("Hello world !", {
      top: 100,
      left: 100,
      width: 200,
      height:200,
      backgroundColor: '',
      fill: '#000000',
      fontSize: 16,
      lockScalingX: true,
      lockScalingY: true,
      hasRotatingPoint: true,
      transparentCorners: true,
      cornerSize: 7
    });
    canvas.add(t);
  });

  $('#clear-btn').click(function() {
    canvas.setBackgroundImage('', canvas.renderAll.bind(canvas));
    canvas.clear().renderAll();
  });

  $('#delete-btn').click(function() {
    if (canvas.getActiveObject()) {
      canvas.remove(canvas.getActiveObject());
    }
  })

  $('#sticker-btn').click(function() {
    fabric.Image.fromURL('img/f.jpg',function(oImg){
    oImg.scale(0.2).setFlipX(true);//tmñ
    oImg.left=230;//posicion de imagen
    oImg.top=230;
    canvas.add(oImg);
    });
  });

  $('#rect-btn').click(function() {
    // create a rectangle object
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    });
    canvasWrapper.add(rect);
  });

});//doc ready

