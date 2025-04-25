function Facilitieshow(containerSelector, interval = 3000) {
    const containershow = document.querySelector(containerSelector);
    if (!containershow) return;
  
    const slideshows = containershow.getElementsByClassName("mySlideshow");
    if (slideshows.length === 0) return;
  
    let current = 0;
  
    function showSlideBED() {
      for (let i = 0; i < slideshows.length; i++) {
        slideshows[i].style.display = "none";
      }
  
      current++;
      if (current > slideshows.length) {
        current = 1;
      }
  
      slideshows[current - 1].style.display = "block";
      setTimeout(showSlideBED, interval);
    }

    console.log(`Running slideshow: ${containerSelector}`);

  
    showSlideBED();
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    Facilitieshow(".slideshow1");
    Facilitieshow(".slideshow2");
    Facilitieshow(".slideshow3");
  });