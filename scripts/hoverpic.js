
let hoverpic = document.querySelectorAll("rect");

for (var i=0; i<hoverpic.length; i++) {
    console.log(hoverpic[i]);
if (document.getElementById(hoverpic[i].id + "-bild") !== null) {

   hoverpic[i].ontouch = 
   hoverpic[i].onmouseover = function () {
     console.log(this, this.getAttribute("fill"))
     this.setAttribute("fill","url(#"+this.id+"-overlay)")
     console.log(this, this.getAttribute("fill"))
     
     

   }


   hoverpic[i].onclick = function () {

      if (document.querySelector(".show") !== null) {
         document.querySelector(".show").classList.remove("show");
         console.log("mehrere offen");

      }
      
      document.getElementById(this.id + "-div").classList.toggle("show"); 
      let bigdiv = document.getElementById(this.id + "-div");
      let divId = this.id + "-div";
      let background = document.getElementById("background");
      background.onclick =
      // hoverpic.onclick =
      bigdiv.onclick = function () {
         
         document.getElementById(divId).classList.remove("show");
   
       }
    } } }


    // remove old div when new one is displayed

let topf = document.getElementById("topf-poly");

if (document.getElementById(topf.id + "-video") !== null) {

   

   topf.onclick = function () {
      
      document.getElementById(this.id + "-div").classList.toggle("show"); 
      let bigdiv = document.getElementById(this.id + "-div");
      let divId = this.id + "-div";
      let background = document.getElementById("background");
      console.log(divId);
      

      background.onclick =
      bigdiv.onclick = function () {
         console.log("testtext");
         console.log(divId);
         document.getElementById(divId).classList.remove("show");
      }
   
   } }

