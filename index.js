const openBtn = document.querySelector("#open-btn")
const modal = document.querySelector("#full")
const closeBtn = document.querySelector("#close-btn")

openBtn.addEventListener("click", function() {
    modal.style.display = "block"
})

closeBtn.addEventListener("click", function() {
    modal.style.display = "none"
})

window.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none"
    }
})