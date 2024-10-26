const textareaEl = document.getElementById("textarea");
const counterEl = document.getElementById("counter");
const remainEl = document.getElementById("remain");

textareaEl.addEventListener("keyup" , ()=>{
    updateCounter()
});

updateCounter()

function updateCounter() {
    counterEl.innerText = textareaEl.value.length;
    remainEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}