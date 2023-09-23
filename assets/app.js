const moles = document.querySelectorAll(".mole")
const arr = [];


 moles.forEach((mole) => {
        arr.push(mole)
    })
function randomColor() {
   
    const random = Math.floor(Math.random() * 12);
    arr[random].classList.add("active")
    const active = document.querySelector(".active")

active.onclick = (() => {
    active.classList.remove("active")
    randomColor();
    
})
}

randomColor()
