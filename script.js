const nav = document.querySelector(".naviList");
const togg = document.querySelector(".toggle");
const elDialoge = document.querySelector(".el-dialoge");
const suppDialoge = document.querySelector(".support-us");
const formDialoge = document.querySelector(".formDial");
const opSupDialoge = document.querySelector(".suppLink");
const opElDialoge = document.querySelector(".earn-learn");
const opFormDial = document.querySelector(".form-dailog");
const closeDialoge = document.querySelector(".close-bg-el");
const closeSuppDialoge = document.querySelector(".close-bg-support");
const closeFormDial = document.querySelector(".close-bg-form");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const imgList = document.querySelectorAll(".img");
const imgsList = document.querySelectorAll(".imgs");

console.log(imgsList);
let index = 0;
let indexB = 0;
let interval = null;
let intervalB = null;

firstSlide();
firstSlideB();

function slideShow(currIndex) {
  if (imgList.length <= currIndex) {
    currIndex = 0;
    index = currIndex;
  } else if (currIndex < 0) {
    currIndex = imgList.length - 1;
    index = currIndex;
  }

  imgList.forEach((img) => {
    img.classList.remove("displayThis");
  });

  imgList[index].classList.add("displayThis");
}

function firstSlide() {
  imgList[index].classList.add("displayThis");
  interval = setInterval(nex, 2000);
}

function previous() {
  clearInterval(interval);
  index--;
  slideShow(index);
  interval = setInterval(nex, 2000);
}

function nex() {
  clearInterval(interval);
  index++;
  slideShow(index);
  interval = setInterval(nex, 2000);
}

document.addEventListener("click", (e) => {
  const ele = e.target;
  if (ele.className === "btnPrev") {
    previous();
  } else if (ele.className === "btnNext") {
    nex();
  }
});

function slideShowB(currIndex) {
  if (imgsList.length <= currIndex) {
    currIndex = 0;
    indexB = currIndex;
  } else if (currIndex < 0) {
    currIndex = imgsList.length - 1;
    indexB = currIndex;
  }

  imgsList.forEach((imgs) => {
    imgs.classList.remove("display");
  });

  imgsList[indexB].classList.add("display");
}

function firstSlideB() {
  imgsList[index].classList.add("display");
  intervalB = setInterval(nexB, 2000);
}

function nexB() {
  clearInterval(intervalB);
  indexB++;
  slideShowB(indexB);
  intervalB = setInterval(nexB, 2000);
}

function previousB() {
  clearInterval(intervalB);
  indexB--;
  slideShowB(indexB);
  intervalB = setInterval(nexB, 2000);
}

document.addEventListener("click", (e) => {
  const ele = e.target;
  if (ele.className === "btnPre") {
    previousB();
  } else if (ele.className === "btnNex") {
    nexB();
  }
});

function toggle() {
  const btnAtri = togg.getAttribute("data-visible");
  if (btnAtri === "false") {
    togg.setAttribute("data-visible", "true");
    nav.setAttribute("data-visible", "true");
  } else {
    togg.setAttribute("data-visible", "false");
    nav.setAttribute("data-visible", "false");
  }
}

togg.addEventListener("click", toggle);

opSupDialoge.addEventListener("click", () => {
  suppDialoge.showModal();
});
opElDialoge.addEventListener("click", () => {
  elDialoge.showModal();
});
formDialoge.addEventListener("click", () => {
  opFormDial.showModal();
});
closeDialoge.addEventListener("click", () => {
  elDialoge.close();
});
closeSuppDialoge.addEventListener("click", () => {
  suppDialoge.close();
});
closeFormDial.addEventListener("click", () => {
  opFormDial.close();
});
