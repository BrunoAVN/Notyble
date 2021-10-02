let svgSketch = SvgPenSketch.default;
var strokeWidth = document.getElementById("strokeWidth");

// Prep the svg element to be drawn on (custom path styles can be passed in optionally)
var strokeStyle =  {"stroke": "black", "strokeWidth": strokeWidth.value.toString+"px"};
const canvas = new svgSketch(document.querySelector(".sketch"), strokeStyle);
canvas.eraserParam.eraserMode = 'pixel';

canvas.getElement();

// Callbacks can be set for various events
canvas.penDownCallback = (path, event) => {
    console.log(`Pointer location = (${event.offsetX},${event.offsetY}) @ ${event.timeStamp}, ${event.pressure}`);
};

var colorPicker = new iro.ColorPicker('#picker', {width:200});

function colorChange(){
    var color = colorPicker.color.hexString;
    canvas.strokeStyles.stroke = color;
};

var eraserCb = document.getElementById("eraserMode");
eraserCb.addEventListener("click", (event) =>{
  var eraserStatus = canvas.eraserParam.eraserMode;
  switch (eraserStatus) {
    case "object":
      canvas.eraserParam.eraserMode = 'pixel';
      break;
    case "pixel":
      canvas.eraserParam.eraserMode = 'object';
      break;
  }
})

strokeWidth.addEventListener("change", (event) =>{
  console.log(strokeWidth.value);
  canvas.strokeStyles['stroke-width'] = strokeWidth.value.toString() + 'px'
})
