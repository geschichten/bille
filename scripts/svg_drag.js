// We select the SVG into the page
// let svg = document.querySelector('svg');

// If browser supports pointer events
if (window.PointerEvent) {
  svg.addEventListener('pointerdown', onPointerDown); // Pointer is pressed
  svg.addEventListener('pointerup', onPointerUp); // Releasing the pointer
  svg.addEventListener('pointerleave', onPointerUp); // Pointer gets out of the SVG area
  svg.addEventListener('pointermove', onPointerMove); // Pointer is moving
} else {
  // Add all mouse events listeners fallback
  svg.addEventListener('mousedown', onPointerDown); // Pressing the mouse
  svg.addEventListener('mouseup', onPointerUp); // Releasing the mouse
  svg.addEventListener('mouseleave', onPointerUp); // Mouse gets out of the SVG area
  svg.addEventListener('mousemove', onPointerMove); // Mouse is moving

  // Add all touch events listeners fallback
  svg.addEventListener('touchstart', onPointerDown); // Finger is touching the screen
  svg.addEventListener('touchend', onPointerUp); // Finger is no longer touching the screen
  svg.addEventListener('touchmove', onPointerMove); // Finger is moving
}

// Create an SVG point that contains x & y values
let point = svg.createSVGPoint();
// This function returns an object with X & Y values from the pointer event
function getPointFromEvent (event) {
  
  // If even is triggered by a touch event, we get the position of the first finger
  if (event.targetTouches) {
    point.x = event.targetTouches[0].clientX;
    point.y = event.targetTouches[0].clientY;
  } else {
    point.x = event.clientX;
    point.y = event.clientY;
  }
  
  // We get the current transformation matrix of the SVG and we inverse it
  let invertedSVGMatrix = svg.getScreenCTM().inverse();
  
  return point.matrixTransform(invertedSVGMatrix);
}

// This variable will be used later for move events to check if pointer is down or not
let isPointerDown = false;

// This variable will contain the original coordinates when the user start pressing the mouse or touching the screen
let pointerOrigin;

// Function called by the event listeners when user start pressing/touching
function onPointerDown(event) {
  isPointerDown = true; // We set the pointer as down
  
  // We get the pointer position on click/touchdown so we can get the value once the user starts to drag
  pointerOrigin = getPointFromEvent(event);
  event.preventDefault();
}

// We save the original values from the viewBox
let viewBox = svg.viewBox.baseVal;

// Function called by the event listeners when user start moving/dragging
function onPointerMove (event) {
  // Only run this function if the pointer is down
  if (!isPointerDown) {
    return;
  }
  // This prevent user to do a selection on the page
  event.preventDefault();

  // Get the pointer position as an SVG Point
  let pointerPosition = getPointFromEvent(event);

  // Update the viewBox variable with the distance from origin and current position
  // We don't need to take care of a ratio because this is handled in the getPointFromEvent function
  viewBox.x -= (pointerPosition.x - pointerOrigin.x);
  viewBox.y -= (pointerPosition.y - pointerOrigin.y);
}

function onPointerUp() {
  // The pointer is no longer considered as down
  isPointerDown = false;
}