$(function(){
    let brandText = document.querySelector(".d")
  
  window.addEventListener("scroll", function(){
      let value = window.scrollY;
      console.log("scrollY", value);
  
      if(value > 880) {
        brandText.style.animation= "disappear 1s ease-out forwards";
      }else{
        brandText.style.animation= 'slide 1s ease-out'
      }
  });
    let bText = document.querySelector(".brand .text")
  
  window.addEventListener("scroll", function(){
      let value = window.scrollY;
      console.log("scrollY", value);
  
      if(value > 880) {
        bText.style.animation= "disappear 1s ease-out forwards";
      }else{
        bText.style.animation= 'slide 1s ease-out'
      }
  });
   
  
  
  
  })