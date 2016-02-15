
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
      lockScalingX: false,
      lockScalingY: false,
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
    oImg.scale(0.2).setFlipX(false);
    oImg.left=230;
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

  document.getElementById('imageLoader').addEventListener('change', handleImage, false);



  $("#text-italic-btn").click(function() {     
    var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'i-text') {
      activeObject.fontStyle = (activeObject.fontStyle == 'italic' ? '' : 'italic');        
      canvas.renderAll();
    }
  });

  $("#text-bold-btn").click(function() {     
    var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'i-text') {
      activeObject.fontStyle = (activeObject.fontStyle == 'bold' ? '' : 'bold');        
      canvas.renderAll();
    }
  });


  $("#filter-btn").click(function() {
    var hiddenImg = document.createElement('img');
    hiddenImg.src = canvas.getActiveObject().toDataURL();
    hiddenImg.id = 'target';
    hiddenImg.style.display = 'none';
    document.body.appendChild(hiddenImg);
    Caman('#target', function(value) {
      this.brightness(10);
      this.contrast(20);
      this.render(function() {
        canvas.getActiveObject().setSrc(document.getElementById('target').toDataURL(), function() {
          canvas.renderAll();
        });
      });
    });
  });
  

});//doc ready


function handleImage(e){
  var reader = new FileReader();
    reader.onload = function (event){
      var imgObj = new Image();
      imgObj.src = event.target.result;
      imgObj.onload = function () {
        var image = new fabric.Image(imgObj);
        image.set({
              angle: 0,
              padding: 10,
              cornersize:10,
              height:110,
              width:110,
        });
        canvas.centerObject(image);
        canvas.add(image);
        canvas.renderAll();
      }
    }
    reader.readAsDataURL(e.target.files[0]);
}



