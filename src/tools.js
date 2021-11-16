var colorPicker = new iro.ColorPicker('#picker', {width:200});
function colorChange(){
    var color = colorPicker.color.hexString;
    // canvas.strokeStyles.stroke = color;
    lc.colors.primary = color

};

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.keyCode == 37) lc.pan(-10, 0);
  if (e.ctrlKey && e.keyCode == 38) lc.pan(0, -10);
  if (e.ctrlKey && e.keyCode == 39) lc.pan(10, 0);
  if (e.ctrlKey && e.keyCode == 40) lc.pan(0, 10);
  if (e.ctrlKey && e.keyCode == 187) {e.preventDefault(); lc.zoom(0.1)};
  if (e.ctrlKey && e.keyCode == 189) {e.preventDefault(); lc.zoom(-0.1)};
  // if (e.keyCode >= 37 && e.keyCode <= 40) {
  //   e.preventDefault(); // prevents keyboard page scrolling!
  //   lc.repaintAllLayers();
  // }
});


document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
      var deltaScale = - event.deltaY / 530;
      console.log(deltaScale);
      lc.zoom(deltaScale);
    }
});

$(document).ready(function(){
    var tools = [
      {
        name: 'pencil',
        el: document.getElementById('pencil-button'),
        tool: new LC.tools.Pencil(lc),
        cursor: 'cell',
      },
      {
        name: 'eraser',
        el: document.getElementById('eraser-button'),
        tool: new LC.tools.Eraser(lc),
        cursor: 'circle',
      },
      {
        name: 'text',
        el: document.getElementById('text-button'),
        tool: new LC.tools.Text(lc),
        cursor: 'circle',
      }
    ];

    var activateTool = function(t) {
        lc.setTool(t.tool);

        tools.forEach(function(t2) {
          if (t == t2) {
            t2.el.classList.add('uk-alert-primary');
          } else {
            t2.el.classList.remove('uk-alert-primary');
          }
        });
    }

    tools.forEach(function(t) {
      t.el.style.cursor = "pointer";
      t.el.onclick = function(e) {
        e.preventDefault();
        activateTool(t);
      };
    });
    activateTool(tools[0]);
});

function UpdateCursor(value){
  var cursorObj = window.open('./teste.svg');
  var changeCircle = cursorObj.querySelector('circle');
  changeCircle.r.baseVal.value = value;
};


var pencilStrokeWidth = document.getElementById("pencil-strokeWidth");
pencilStrokeWidth.addEventListener("change", (event) =>{
  var value = parseInt(pencilStrokeWidth.value);
  lc.tool.strokeWidth = value;
  UpdateCursor(value);
});

var eraserStrokeWidth = document.getElementById("eraser-strokeWidth");
eraserStrokeWidth.addEventListener("change", (event) =>{
  var value = parseInt(eraserStrokeWidth.value);
  lc.tool.strokeWidth = value;
  mainPane = document.getElementsById('main');
  cursorShape = 'none'
// mainPane.style['cursor'] =

});
