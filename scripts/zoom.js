let transformMatrix = [1, 0, 0, 1, 0, 0];
let svg = document.querySelector('svg');
let viewbox = svg.getAttributeNS(null, "viewBox").split(" ");
let centerX = parseFloat(viewbox[2]) / 2;
let centerY = parseFloat(viewbox[3]) / 2;
let matrixGroup = svg.getElementById("matrix-group");

//prevent default browser zoom
document.body.addEventListener("wheel", e=>{
    if(e.ctrlKey)
      event.preventDefault();
  });

function zoom(scale) {
    for (let i = 0; i < 4; i++) {
      transformMatrix[i] *= scale;
    }
    transformMatrix[4] += (1 - scale) * centerX;
    transformMatrix[5] += (1 - scale) * centerY;

    let newMatrix = "matrix(" +  transformMatrix.join(' ') + ")";
    matrixGroup.setAttributeNS(null, "transform", newMatrix);
}