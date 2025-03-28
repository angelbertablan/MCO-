document.addEventListener("DOMContentLoaded", function () {
    let cart = [];
    let totalPrice = 0;

    // Select all "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.getAttribute("data-name");
            const productPrice = parseFloat(this.getAttribute("data-price"));

            addToCart(productName, productPrice);
        });
    });

    function addToCart(name, price) {
        // Add item to the cart array
        cart.push({ name, price });
        totalPrice += price;
        updateCart();
    }

    function updateCart() {
        let cartList = document.getElementById("cart-list");
        let totalElement = document.getElementById("total-price");

        // Clear the cart before updating
        cartList.innerHTML = "";

        // Display each item in the cart
        cart.forEach((item, index) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;

            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-btn");
            removeBtn.onclick = function () {
                removeFromCart(index);
            };

            listItem.appendChild(removeBtn);
            cartList.appendChild(listItem);
        });

        totalElement.textContent = totalPrice.toFixed(2);
    }

    function removeFromCart(index) {
        totalPrice -= cart[index].price;
        cart.splice(index, 1);
        updateCart();
    }
});