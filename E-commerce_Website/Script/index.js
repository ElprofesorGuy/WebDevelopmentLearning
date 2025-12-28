
const btnLeft = document.querySelector('.button-left');
const btnRight = document.querySelector('.button-right');

const scrollAmount = 280; 

btnLeft.addEventListener('click', () => {
    const productContainer = document.querySelector('.todays-products');
    var marginLeft = parseInt(productContainer.style.marginLeft) || 0;
    if(marginLeft >= 0){
        productContainer.style.marginLeft = '0px';
    }else{
        productContainer.style.marginLeft = (parseInt(productContainer.style.marginLeft) || 0) + scrollAmount + 'px';
    }
});

btnRight.addEventListener('click', () => {
    const productContainer = document.querySelector('.todays-products');
    var marginLeft = parseInt(productContainer.style.marginLeft) || 0;
    if(marginLeft  <= -810){
        console.log("Limite droite atteinte");
    }else{
        productContainer.style.marginLeft = (parseInt(productContainer.style.marginLeft) || 0) - scrollAmount + 'px';
    }
});