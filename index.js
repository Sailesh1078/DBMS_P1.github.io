const body = document.body;
let lastScroll = 0;

 window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.classList.remove("scroll-up");
            return;
        }

        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
        } else if (
            currentScroll < lastScroll &&
            body.classList.contains("scroll-down")
        ) {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
});

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}