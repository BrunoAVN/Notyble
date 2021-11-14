var colorPicker = new iro.ColorPicker('#picker', {width:200});
function colorChange(){
    var color = colorPicker.color.hexString;
    // canvas.strokeStyles.stroke = color;
    lc.colors.primary = color

};

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 37) lc.pan(-10, 0);
  if (e.keyCode == 38) lc.pan(0, -10);
  if (e.keyCode == 39) lc.pan(10, 0);
  if (e.keyCode == 40) lc.pan(0, 10);
  if (e.ctrlKey && e.keyCode == 187) {e.preventDefault(); lc.zoom(0.1)};
  if (e.ctrlKey && e.keyCode == 189) {e.preventDefault(); lc.zoom(-0.1)};
  if (e.keyCode >= 37 && e.keyCode <= 40) {
    e.preventDefault(); // prevents keyboard page scrolling!
    lc.repaintAllLayers();
  }
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
        tool: new LC.tools.Pencil(lc)
      },
      {
        name: 'eraser',
        el: document.getElementById('eraser-button'),
        tool: new LC.tools.Eraser(lc)
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


var strokeWidth = document.getElementById("strokeWidth");
strokeWidth.addEventListener("change", (event) =>{
  var value = parseInt(strokeWidth.value);
  lc.tool.strokeWidth = value;
})
