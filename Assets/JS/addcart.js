
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.getElementById('addCart');
    const successModal = document.getElementById('successModal');
    
    let cartCount = 0;
    
    function updateCartCount() {
        cartCountElement.textContent = cartCount;
        cartCountElement.style.color = "red";
    }

    function showModal() {
        successModal.style.display = "flex"; 

       
        setTimeout(() => {
            successModal.style.display = "none"; 
        }, 1000);
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            updateCartCount(); 
            showModal(); 
        });
    });

