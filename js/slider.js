const appearsOnWidth = 768;
const slideInterval = 4000;
const smallScreen = 425;
const marginRight = screen.width > smallScreen ? 20 : 10;
addEventListener("DOMContentLoaded", () => {
   const slider = document.querySelector(".slider");
   const sliderLine = document.querySelector(".slider__line");
   if(slider.getAttribute("mobileOnly") !== null && screen.width >= appearsOnWidth) {
      const innerContainer = slider.parentNode;
      innerContainer.innerHTML = sliderLine.innerHTML;
   }
   
   const sliderLineElement = sliderLine.children[0];
   const maxOffset = sliderLine.offsetWidth -
      sliderLine.offsetWidth/sliderLineElement.offsetWidth -
      sliderLineElement.offsetWidth;

   let offset = 0;
   function slideToNext() {
      offset += sliderLineElement.offsetWidth + marginRight;
      if(offset > maxOffset)
         offset = 0;
      sliderLine.style.left = -offset + "px";
   }
   setInterval(slideToNext, slideInterval);
})