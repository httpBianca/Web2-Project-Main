const header = document.querySelector('header');
const btn = document.querySelector('.top');
const bttEnd = document.querySelector('.btt-end');
const offers = document.querySelector('.offers-galery');

function colorChange(){
    if (document.documentElement.scrollTop > 300) {
        header.className = "color";
      } else {
        header.className = "";
      }
}

function backToTop(){
  window.scrollTo(0,0);
}

function ToElement(){
  const elementTop = offers.offsetTop;
  window.scrollTo({top: elementTop, behavior: 'smooth'});
}

window.addEventListener('scroll', function(){
    colorChange();
});

btn.addEventListener('click', function(){
  backToTop();
});

bttEnd.addEventListener('click', function(){
  ToElement()
})
