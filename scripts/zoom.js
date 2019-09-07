var transformMatrix = [1, 0, 0, 1, 0, 0];
    var svg = document.getElementById('alles');
    var viewbox = svg.getAttributeNS(null, "viewBox").split(" ");
    var centerX = parseFloat(viewbox[2]) / 2;
    var centerY = parseFloat(viewbox[3]) / 2;
    var matrixGroup = svg.getElementById("matrix-group");



    function zoom(scale) {
        for (var i = 0; i < 4; i++) {
          transformMatrix[i] *= scale;
        }
        transformMatrix[4] += (1 - scale) * centerX;
        transformMatrix[5] += (1 - scale) * centerY;
                      
        var newMatrix = "matrix(" +  transformMatrix.join(' ') + ")";
        matrixGroup.setAttributeNS(null, "transform", newMatrix);
      }
  
  