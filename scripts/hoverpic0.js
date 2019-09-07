
let hoverpic = document.querySelectorAll("rect");

for (var i=0; i<hoverpic.length; i++) {
    console.log(hoverpic[i]);
if (document.getElementById(hoverpic[i].id + "-bild") !== null) {

   hoverpic[i].ontouch = 
   hoverpic[i].onmouseover = function () {
     
     document.getElementById(this.id + "-bild").classList.toggle("thumb");
      // document.getElementById("rect").classList.toggle("toggle");
      // nimm x & y von svg-rect und übertrag sie auf bild;
      // cover bild auf svg-werte
   }
   hoverpic[i].ontouchend = 
   hoverpic[i].onmouseout = function () {
      document.getElementById(this.id + "-bild").classList.toggle("thumb");
     // document.getElementById("rect").classList.toggle("toggle");
   }

   hoverpic[i].onclick = function () {
     document.getElementById(this.id + "-bild").classList.toggle("show");
   }}
 
 
  
}

