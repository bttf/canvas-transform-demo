var game = new Game();

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
  window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame    || 
  window.oRequestAnimationFrame      || 
  window.msRequestAnimationFrame     || 
  function(/* function */ callback, /* DOMElement */ element){
    window.setTimeout(callback, 1000 / 60);
  };
})();

var add_event_listeners = function() {
  // body.addEventListener("keydown", key_down, false);
  // body.addEventListener("keyup", key_up, false);
  // body.addEventListener("keypress", key_press, false);
  // body.addEventListener("mousedown", mouse_down, false);
  // body.addEventListener("mouseup", mouse_up, false);
  // body.addEventListener("mousemove", mouse_move, false);
  document.getElementById('reset_button').addEventListener("click", function() {
    document.getElementById('transform_a').value = 1;
    document.getElementById('transform_b').value = 0;
    document.getElementById('transform_c').value = 0;
    document.getElementById('transform_d').value = 1;
    document.getElementById('transform_e').value = 0;
    document.getElementById('transform_f').value = 0;
  }, false);
};

var init_browser = function() {
  // console.log('debug: init_browser called');
  // context.font = "16px Arial";
	body = document.getElementsByTagName("body")[0];
	canvas = document.createElement("canvas");
	canvas.id = "canvas";
	canvas.width = window.innerWidth - 150;
	canvas.height = window.innerHeight - 150;
	context = canvas.getContext('2d');
	body.appendChild(canvas);
  add_event_listeners();
  horizon = (canvas.height / 2);
  center_axis = (canvas.width / 2);

  //context.transform(1, .05, 0.5, 1, 0, 0);
};

var init = function() {
  init_browser();
  game.init(canvas);
};

var loop = function() {
  requestAnimFrame(loop);
	context.clearRect(0, 0, canvas.width, canvas.height);
  game.render(context);
  game.draw(context);
};

var start = function() {
  init();
  loop();
};

window.onload = start;

