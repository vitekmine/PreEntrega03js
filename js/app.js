const addToCart=document.querySelectorAll('[data-btn-action="add-btn-cart"]');

const closeModal=document.querySelector('.jsModalClose');

addToCart.forEach(btn => {
    
    btn.addEventListener('click',(event)=>{

        const nameModal=event.target.getAttribute('data-modal');

        const modal=document.querySelector(nameModal);

        
        modal.classList.add('active');

    })

});


closeModal.addEventListener('click',(event)=>{
    event.target.parentNode.parentNode.classList.remove('active');
})


window.onclick = (event)=>{
    const modal=document.querySelector('.modal.active');

    if(event.target == modal){
        modal.classList.remove('active');
    }
}