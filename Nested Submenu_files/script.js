function Facilitieshow(containerSelector, interval = 3000) {
    let FacslideIndex = 0;
    const containerSlide = document.querySelector(containerSelector);
  
    if (!containerSlide) {
      console.warn(`No container found for selector: ${containerSelector}`);
      return;
    }
  
    const Facslides = containerSlide.getElementsByClassName("mySlideshow");
  
    if (Facslides.length === 0) {
      console.warn(`No slides with class 'mySlideshow' found inside ${containerSelector}`);
      return;
    }
  
    function FacshowSlides() {
      for (let i = 0; i < Facslides.length; i++) {
        Facslides[i].style.display = "none";
      }
  
      FacslideIndex++;
      if (FacslideIndex > Facslides.length) {
        FacslideIndex = 1;
      }
  
      Facslides[FacslideIndex - 1].style.display = "block";
      setTimeout(FacshowSlides, interval);
    }
  
    FacshowSlides();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    Facilitieshow(".slideshow1");
    Facilitieshow(".slideshow2");
    Facilitieshow(".slideshow3");
  });
  