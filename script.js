const header = document.querySelector('header');
const btn = document.querySelector('.top');
const bttEnd = document.querySelector('.btt-end');
const offers = document.querySelector('.offers-galery');

/* ---- Funções ---- */

/* ---- Muda a cor (adiciona uma classe ao header) ao alcançar um scroll de um certo tamanho ----- */

function colorChange(){
    if (document.documentElement.scrollTop > 50) {
        header.className = "color";
      } else {
        header.className = "";
      }
}

/* ---- Função pega a posição superior em px em relação ao pai e da um scroll até essa posição ----- */

function backToTop(){
  const elementTop = header.offsetTop;
  window.scrollTo({top: elementTop, behavior: 'smooth'});
}

function ToElement(){
  const elementTop = offers.offsetTop;
  window.scrollTo({top: elementTop, behavior: 'smooth'});
}

/* --- Chamada das funções ---- */

window.addEventListener('scroll', function(){
    colorChange();
});

btn.addEventListener('click', function(){
  backToTop();
});

bttEnd.addEventListener('click', function(){
  ToElement()
})
