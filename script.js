const header = document.querySelector('header');

function colorChange(){
    if (document.documentElement.scrollTop > 300) {
        header.className = "color";
      } else {
        header.className = "";
      }
}


window.addEventListener('scroll', function(){
    colorChange();
})
