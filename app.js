const imgArray = ["slide-1", "slide-2", "slide-3"];
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const slide = document.querySelector(".slide");
const dots = document.querySelectorAll(".dot");

let counter = 0;
leftBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) counter = imgArray.length - 1;
  showActive(counter);
});

rightBtn.addEventListener("click", () => {
  counter++;
  if (counter > imgArray.length - 1) counter = 0;
  showActive(counter);
});

function showActive(counter) {
  slide.setAttribute("src", `img/${imgArray[counter]}.jpg`);
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[counter].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots.forEach((circle) => {
      circle.classList.remove("active");
    });
    slide.setAttribute("src", `img/${imgArray[index]}.jpg`);
    dots[index].classList.add("active");
  });
});
