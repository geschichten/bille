var legende = document.querySelectorAll("#legende rect");
//console.log(legende);

Array.from(legende).forEach(function(item){
    item.addEventListener('mouseenter', (e) => {
  
      //console.log('hilfe', item.id);
      let elementGroup = document.getElementById(item.id + "en");
      //console.log("id ist " + elementGroup.id);
      let legendeElements = elementGroup.children;
      Array.from(legendeElements).forEach(function (singleElement){
          //console.log(singleElement.id);
          singleElement.classList.add("showlegende"); })
    });
    item.addEventListener('mouseleave', (e) => {
  
        //console.log('hilfe', item.id);
        let elementGroup = document.getElementById(item.id + "en");
        //console.log("id ist " + elementGroup.id);
        let legendeElements = elementGroup.children;
        Array.from(legendeElements).forEach(function (singleElement){
            //console.log(singleElement.id);
            singleElement.classList.remove("showlegende"); })
      });
  });