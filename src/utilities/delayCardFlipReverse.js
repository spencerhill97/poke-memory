import sleep from "./sleep";

const delayCardFlipReverse = async (prevClass, newClass) => {
  const arr = document.querySelectorAll(`.${prevClass}`);
  for (let i = arr.length - 1; i >= 0; i--) {
    await sleep(50);
    arr[i].classList.toggle(newClass);
  }
};

export default delayCardFlipReverse;
