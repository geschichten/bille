
let hoverpic = document.querySelectorAll("rect");

for (var i=0; i<hoverpic.length; i++) {
    console.log(hoverpic[i]);
if (document.getElementById(hoverpic[i].id + "-bild") !== null) {

   hoverpic[i].ontouch = 
   hoverpic[i].onmouseover = function () {
     console.log(this, this.getAttribute("fill"))
     this.setAttribute("fill","url(#"+this.id+"-overlay)")
     console.log(this, this.getAttribute("fill"))
     
          // document.getElementById(this.id + "-bild").classList.toggle("show");
      // document.getElementById("rect").classList.toggle("toggle");
      // nimm x & y von svg-rect und übertrag sie auf bild;
      // cover bild auf svg-werte
   }
   hoverpic[i].onclick = function () {
     
     document.getElementById(this.id + "-bild").classList.toggle("show"); 
    }

    hoverpic[i].ontouchend = 
   hoverpic[i].onmouseout = function () {
      //this.setAttribute("fill",'none')
      document.getElementById(this.id + "-bild").classList.remove("show");
     // document.getElementById("rect").classList.toggle("toggle");
   } 

   

}
 
  
}
