const moles = document.querySelectorAll(".mole");
const molesWrapper = document.querySelector(".allMoles");
document.addEventListener("DOMContentLoaded", changeBackground);

function changeBackground(mole) {
  moles.forEach((mole) => {
    mole.classList.remove("active");
  });

  let random;
  do {
    random = Math.floor(Math.random() * moles.length);
    console.log(random);
  } while (mole && mole.id === `${random + 1}`);

  document.getElementById(`mole${random + 1}`).classList.add("active");
}

molesWrapper.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("mole") &&
    e.target.classList.contains("active")
  ) {
    changeBackground(e.target);
  }
});
