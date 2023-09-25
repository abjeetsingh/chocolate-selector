const imgs = document.querySelectorAll(".img-select a");
let price = document.getElementById("price");
const imgBtns = [...imgs];
let imgId = 1;
let count = 1;
imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

const buttons = document.getElementsByTagName("button");

const buttonPressed = (e) => {
  let val = e.target.innerText.split(" ")[1]; // Get ID of Clicked Element

  if (e.target.classList.contains("added")) {
    if (count >= 8) {
      document.getElementById("no-more").style.display = "none";
    }
    price.innerText = parseInt(price.innerHTML) - parseInt(val);
    e.target.classList.remove("added");
    count--;
  } else {
    if (count > 8) {
      document.getElementById("no-more").style.display = "inline";
    } else {
      price.innerText = parseInt(price.innerHTML) + parseInt(val);
      e.target.classList.add("added");
      count++;
    }
  }
};

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}
