var func = function () {
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  let p = document.querySelector('.prev')
  p.onclick = function(){plusSlides(-1)}
  let n = document.querySelector('.next')
  n.onclick = function(){plusSlides(1)}
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none"; 
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block"; 
    // dots[slideIndex-1].className += " active";
  }
  
  
  let slideIndex2 = 1;
  showSlides2(slideIndex2);
  
  // Next/previous controls
  function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  }

  let p2 = document.querySelector('.prev2')
  p2.onclick = function(){plusSlides2(-1)}
  let n2 = document.querySelector('.next2')
  n2.onclick = function(){plusSlides2(1)}
  
  // Thumbnail image controls
  function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
  }
  
  function showSlides2(n) {
    let i2;
    let slides2 = document.getElementsByClassName("mySlides2");
    // let dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length) {slideIndex2 = 1} 
    if (n < 1) {slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none"; 
    }
    // for (i = 0; i < dots2.length; i++) {
    //     dots2[i].className = dots2[i].className.replace(" active", "");
    // }
    slides2[slideIndex2-1].style.display = "block"; 
    // dots2[slideIndex2-1].className += " active";
  }

  
  let slideIndex3 = 1;
  showSlides3(slideIndex3);
  
  // Next/previous controls
  function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
  }

  let p3 = document.querySelector('.prev3')
  p3.onclick = function(){plusSlides3(-1)}
  let n3 = document.querySelector('.next3')
  n3.onclick = function(){plusSlides3(1)}
  
  // Thumbnail image controls
  function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
  }
  
  function showSlides3(n) {
    let i3;
    let slides3 = document.getElementsByClassName("mySlides3");
    // let dots2 = document.getElementsByClassName("dot2");
    if (n > slides3.length) {slideIndex3 = 1} 
    if (n < 1) {slideIndex3 = slides3.length}
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none"; 
    }
    // for (i = 0; i < dots2.length; i++) {
    //     dots2[i].className = dots2[i].className.replace(" active", "");
    // }
    slides3[slideIndex3-1].style.display = "block"; 
    // dots2[slideIndex2-1].className += " active";
  }
}


var mq = window.matchMedia('all and (min-width: 600px)');
if(mq.matches) {
    // the width of browser is more then 600px
    let slides = document.getElementsByClassName("mySlides");
    let slides2 = document.getElementsByClassName("mySlides2");
    let slides3 = document.getElementsByClassName("mySlides3");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block"; 
    }
    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "block"; 
    }
    for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "block"; 
    }
} else { func() }


mq.addListener(function(changed) {
  if(changed.matches) {
      // the width of browser is more then 700px
      let slides = document.getElementsByClassName("mySlides");
    let slides2 = document.getElementsByClassName("mySlides2");
    let slides3 = document.getElementsByClassName("mySlides3");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block"; 
    }
    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "block"; 
    }
    for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "block"; 
    }
  } else { func() }
  return
});



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function bar() {
  var x = document.getElementById("nav-list");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}





