const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 5);

function blurring() {
  load++;

  if (load > 2136) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 2137, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 2137, 90, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
