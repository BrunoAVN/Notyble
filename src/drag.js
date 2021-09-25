var dragging = false;

$('#dragbar').mousedown(function(e){
  e.preventDefault();
  dragging = true;
  var side = $('#side');
  $(document).mousemove(function(ex){
    side.css("width", ex.pageX +2);
  });
});

$(document).mouseup(function(e){
  if (dragging)
  {
    $(document).unbind('mousemove');
    dragging = false;
  }
});
