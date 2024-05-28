const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const container = document.querySelector(".container");
const items = document.querySelectorAll(".list .item");
const indicator = document.querySelector(".indicators");
const dots = indicator.querySelectorAll("ul li");
const list = container.querySelector('.list')

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
  let itemOld = container.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  //mudar a cor da barrinha
  let dotsOld = indicator.querySelector("ul li.active");
  dotsOld.classList.remove("active");
  dots[active].classList.add("active");
}

nextButton.onclick = () => {
  list.style.setProperty('--calculation', 1)
  active = active + 1 > lastPosition ? 0 : active + 1;
  setSlider()
  items[active].classList.add("active");

  //mudar o número
  indicator.querySelector(".numbers").innerHTML = "0" + (active + 1);
};

previousButton.onclick = () => {
  list.style.setProperty('--calculation', -1)
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  setSlider()
  items[active].classList.add("active");

  //mudar o número
  indicator.querySelector(".numbers").innerHTML = "0" + (active + 1);
};
