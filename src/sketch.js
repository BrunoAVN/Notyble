let svgSketch = SvgPenSketch.default;

// Prep the svg element to be drawn on (custom path styles can be passed in optionally)
var strokeStyle =  {"stroke": "black", "stroke-width": "10px"};
const canvas = new svgSketch(document.querySelector(".sketch"), strokeStyle);
canvas.eraserParam.eraserMode = 'pixel'

//  const canvas = new svgSketch(document.querySelector(".sketch"), strokeStyle);

canvas.getElement();


//canvas.strokeStyle = {"stroke": "black", "stroke-width": "10px"};

// Callbacks can be set for various events
canvas.penDownCallback = (path, event) => {
    // console.log(`Pointer location = (${event.offsetX},${event.offsetY}) @ ${event.timeStamp}`);
};

var colorPicker = new iro.ColorPicker('#picker', {width:200});

function colorChange(){
    var color = colorPicker.color.hexString;
    canvas.strokeStyles.stroke = color;
};

function eraserMode(){
    const cb = document.getElementById("eraserMode");
    if (cb.checked) {
      canvas.eraserParam.eraserMode = 'object'
    } else {
      canvas.eraserParam.eraserMode = 'pixel'
    }
}
