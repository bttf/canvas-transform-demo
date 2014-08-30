function Game() {
  this.transform = {};
  this.transform.a = 1;
  this.transform.b = 0;
  this.transform.c = 0;
  this.transform.d = 1;
  this.transform.e = 0;
  this.transform.f = 0;

  this.rectX = 0;
  this.rectY = 0;
  
  this.speed = 4;
}

Game.prototype.init = function(canvas) {
  this.canvas = canvas;

  this.rectWidth = (canvas.width - 20) / 8;
  this.rectHeight = (canvas.height - 20) / 8;
  this.rectSpacer = 10;
};

Game.prototype.render = function(context) {
  if (this.rectX < this.canvas.width)
    this.rectX += this.speed;
  else
    this.rectX = 0;
  this.rectY = this.canvas.height / 6;

  var inputA = document.getElementById('transform_a').value;
  var inputB = document.getElementById('transform_b').value;
  var inputC = document.getElementById('transform_c').value;
  var inputD = document.getElementById('transform_d').value;
  var inputE = document.getElementById('transform_e').value;
  var inputF = document.getElementById('transform_f').value;
  this.transform.a = parseFloat(inputA);
  this.transform.b = parseFloat(inputB);
  this.transform.c = parseFloat(inputC);
  this.transform.d = parseFloat(inputD);
  this.transform.e = parseFloat(inputE);
  this.transform.f = parseFloat(inputF);
  // console.log('debug: x=%d, y=%d', this.rectX, this.rectY);
  // console.log('debug: transform.a=%f, transform.b=%f, transform.c=%f, transform.d=%f, transform.e=%f, transform.f=%f',
  //             this.transform.a,
  //             this.transform.b,
  //             this.transform.c,
  //             this.transform.d,
  //             this.transform.e,
  //             this.transform.f);
};

Game.prototype.draw = function(context) {
  var debugStr = "";
  context.fillStyle = "red";
  context.font = "bold 16px courier";
  debugStr += sprintf("debug: transform.a=%f, transform.b=%f, transform.c=%f, transform.d=%f, transform.e=%f, transform.f=%f", this.transform.a,
                      this.transform.b,
                      this.transform.c,
                      this.transform.d,
                      this.transform.e,
                      this.transform.f);
  context.fillText(debugStr, 0, this.canvas.height - 20);
  context.transform(this.transform.a,
                    this.transform.b,
                    this.transform.c,
                    this.transform.d,
                    this.transform.e,
                    this.transform.f);
  drawGrid(context);
  context.fillStyle = "#FFF";
  context.fillRect(this.rectX, this.rectY, 50, 50);
  context.setTransform(1, 0, 0, 1, 0, 0);
};

function drawGrid(context) {
  context.strokeStyle = "#00ff00";
  context.beginPath();
  for (var i = 0; i < this.canvas.height - 20; i+= (this.canvas.height / 10)) {
    context.moveTo(0, i);
    context.lineTo(this.canvas.width, i);
  }
  for (var i = 0; i < this.canvas.width; i+= (this.canvas.width / 20)) {
    context.moveTo(i, 0);
    context.lineTo(i, this.canvas.height - 40);
  }
  context.stroke();
  context.closePath();
}
