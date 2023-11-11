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


/*---- Carrinho de Compras ---- */

/*--- Função ready  */

if (document.readyState == "loading") {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

var totalAmount = '0,00';

function ready() {
  /* --- Laço for para pegar cada elemento com a classe remove-product-button e adicionar um eventListener de clique. A função vai pegar o elemento pai do que foi clicado e novamente pegar o elemento pai do mesmo e removê-lo ---*/

  const removeProductButtons = document.getElementsByClassName('remove-product-button');

  for (var i = 0; i < removeProductButtons.length; i++) {
      removeProductButtons[i].addEventListener('click', removeProduct);
  }

  /*-- Para quando mudar a quantidade do input o valor seja atualizado --*/
  const quantityInputs = document.getElementsByClassName('product-qtd-input');
  for (var i = 0; i < quantityInputs.length; i++) {
      quantityInputs[i].addEventListener('change', checkIfInputIsNull);
  }

  /* --- Add ao carrinho --- */

  const addCartButtons = document.getElementsByClassName('icon-add');
  for (var i = 0; i < addCartButtons.length; i++) {
      addCartButtons[i].addEventListener('click', addProductToCart);
  }

/* finalização do pedido */
  const purchaseButton = document.getElementsByClassName('purchase-button')[0];
  purchaseButton.addEventListener('click', makePurchase);
}

function makePurchase(){
  if(totalAmount === '0,00'){
      alert('Seu carrinho está vazio!');
  }else{
      alert(
          `
          Obrigado pela preferencia!
          Valor do pedido: R$${totalAmount}
          Volte Sempre :)
          `
      );
  }

  document.querySelector('.cart-table tbody').innerHTML = "";
  updateTotal();
}


function checkIfInputIsNull(event){
  if(event.target.value === '0'){
      event.target.parentElement.parentElement.remove();
  }

  updateTotal();
}

function removeProduct(event) {
  event.target.parentElement.parentElement.remove();
  updateTotal();

}

/* --- Calculo do total do carrinho ---- */

function updateTotal() {
  totalAmount = 0;

  const cartProducts = document.getElementsByClassName('cart-product');
  for (var i = 0; i < cartProducts.length; i++) {
      const productPrice = cartProducts[i].getElementsByClassName('cart-product-price')[0].innerText.replace('R$', '').replace(',', '.');
      const productQuantity = cartProducts[i].getElementsByClassName('product-qtd-input')[0].value

      totalAmount += productPrice * productQuantity;
  }

  totalAmount = totalAmount.toFixed(2);
  totalAmount = totalAmount.replace('.', ',')

  //console.log(totalAmount);
  document.querySelector('.cart-total-container span').innerText = "R$" + totalAmount;
}

function addProductToCart(event) {
  const button = event.target;
  const productInfos = button.parentElement.parentElement;
  const productImage = productInfos.getElementsByClassName('img-second')[0].src;
  const productTitle = productInfos.getElementsByClassName('name-info')[0].innerText;
  const productPrice = productInfos.getElementsByClassName('preco')[0].innerText;

  const productsCartName = document.getElementsByClassName('cart-product-title');

  for (var i=0; i< productsCartName.length; i++){
      if(productsCartName[i].innerText === productTitle){
          productsCartName[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
          return;
      }
  }

  let newCartProduct = document.createElement('tr');
  newCartProduct.classList.add('cart-product');

  newCartProduct.innerHTML =
      `
<td class="product-identification">
  <img src="${productImage}" alt="${productTitle}" class="cart-product-image">
  <strong class="cart-product-title">${productTitle}</strong>
</td>
<td>
  <span class="cart-product-price">${productPrice}</span>
</td>
<td>
  <input type="number" value="1" min="0" class="product-qtd-input">
  <button type="button" class="remove-product-button">X</button>
</td>
`
const tableBody = document.querySelector('.cart-table tbody');
tableBody.append(newCartProduct);

updateTotal();
newCartProduct.getElementsByClassName('product-qtd-input')[0].addEventListener('change', checkIfInputIsNull);
newCartProduct.getElementsByClassName('remove-product-button')[0].addEventListener('click', removeProduct);
}
/*
bttClose.addEventListener('click', closeModal);

function closeModal(){
  
}*/
const bttn = document.querySelector('#main');
const bttClose = document.querySelector('span.button');
const modal = document.querySelector('.modal');
const bttCart = document.querySelector('.cart-icon');

function openCart(event){
  modal.classList.add('ativo');
}

function fecharModal(event){
  modal.classList.remove('ativo');
}


bttClose.addEventListener('click', function(){
  fecharModal();
}); 
  bttCart.addEventListener('click', function(){
    openCart();
});
