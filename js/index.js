let myForm = document.querySelector(".formRegisr");
myForm.addEventListener("submit", function () {
    setTimeout(() => {
        myForm.reset();
    }, 50);
})