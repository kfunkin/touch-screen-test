window.onload = function() {

  //select object to drag
  var pinkCircle = document.getElementById('circle');

  //listen to the touchmove event, every time it fires, grab location of
  //of the touch then assign to pinkCircle

  pinkCircle.addEventListener('touchmove', function(ev) {
    //grab location of the touch
    var touchLocation = ev.targetTouches[0];
    //assign pinkCircle new coordinates based on the touch
    pinkCircle.style.left = touchLocation.pageX + 'px';
    pinkCircle.style.top = touchLocation.pageY + 'px';
  })

  pinkCircle.addEventListener('touchend', function(ev) {
    //current pinkCircle position when dropped
    var x = parseInt(pinkCircle.style.left);
    var y = parseInt(pinkCircle.style.top);
    //check to see if that position meets constraints so object
    //doesn't move off canvas/artwork area so use pixel dimensions of device
    // designing for (could make it snap back to orininal position, so could
    //enter original position from stylesheet?)
    if (x < 5 || x > 1000) {
      pinkCircle.style.left = '50px';
      pinkCircle.style.top = '50px';
    }
    if (y < 5 || y > 1000) {
      pinkCircle.style.left = '50px';
      pinkCircle.style.top = '50px';
    }
  })
}
//now I need to work out how to make a variable that will grab all elements
// instead of writing out all of this code for each element!!
