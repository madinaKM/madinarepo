document.addEventListener("DOMContentLoaded", function () {
    let unitOptions = document.querySelectorAll("input[name='unit']");
    let totalPrice = document.getElementById("total-price");
    let selectionBox = document.querySelector(".selection");

    unitOptions.forEach(option => {
        option.addEventListener("change", function () {
            totalPrice.textContent = `$${this.value}.00 USD`;

            // Show size/color selection only for 2-unit option
            if (this.id === "unit2") {
                selectionBox.style.display = "block";
            } else {
                selectionBox.style.display = "none";
            }
        });
    });
});
