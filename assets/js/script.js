
let singleTab = document.getElementsByClassName('tab');
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');
let currentTab = 0;
singleTab[currentTab].style.display="flex";

if(currentTab == 0){
    prevBtn.style.display="none";
}

nextBtn.addEventListener('click', function(e){

    if(currentTab < (singleTab.length - 1)){
        singleTab[currentTab].style.display="none";
        currentTab = currentTab + 1;
        singleTab[currentTab].style.display="flex";
    }else if(currentTab == (singleTab.length - 1)){
        currentTab = singleTab.length - 1;
        singleTab[currentTab].style.display="flex";
        nextBtn.innerHTML="Submit";
    }

    if(currentTab > 0){
        prevBtn.style.display="flex";
    }
    
});

prevBtn.addEventListener('click', function(e){
    singleTab[currentTab].style.display="none";
    currentTab = currentTab - 1;
    if(currentTab < 0){
        currentTab = 0;
    }
    singleTab[currentTab].style.display="flex";

    if(currentTab < (singleTab.length - 1)){
        nextBtn.innerHTML="Next";
    }

    if(currentTab == 0){
        prevBtn.style.display="none";
    }
});


// ******************** Owl Carousel **************//
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      autoplay: true,
    //   autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          animateOut: 'slideOutDown',
          animateIn: 'flipInX'
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });

  //************* Accordtion code start***********//

  let question = document.getElementsByClassName('ques');
  let answer = document.getElementsByClassName('ans');

  Array.from(question).forEach(function(ques){
    ques.addEventListener('click', function(e){
      Array.from(question).forEach(function(ques){
        ques.classList.remove('show');
      });
      Array.from(answer).forEach(function(ans){
        ans.classList.remove('show');
      });
      ques.classList.toggle('show');
      ques.nextElementSibling.classList.toggle('show');
    });
  });