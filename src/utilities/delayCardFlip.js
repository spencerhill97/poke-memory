import sleep from "./sleep";

const delayCardFlip = async (prevClass, newClass) => {
  let arr = document.querySelectorAll(`.${prevClass}`);
  for (let i = 0; i < arr.length; i++) {
    await sleep(50);
    arr[i].classList.toggle(newClass);
  }
};

export default delayCardFlip;
