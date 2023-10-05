const header = document.querySelector('header');
const btn = document.querySelector('.top');

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

window.addEventListener('scroll', function(){
    colorChange();
});

btn.addEventListener('click', function(){
  backToTop();
});
