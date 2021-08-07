let count = 0;

let incrementBtn = document.querySelector("#increment");
let decrementBtn = document.querySelector("#decrement");
let counter = document.querySelector("#counter");

 
function countDisplay() {
    if (count < 0) {
      counter.classList.add("plus");
    } else if (count > 0) {
      counter.classList.add("minus");
    } else {
      counter.classList.remove("plus");
      counter.classList.remove("minus");
    }
  }


incrementBtn.addEventListener("click", () => {
    count++ ;
    counter.innerHTML = count;
    countDisplay();
  });
  
  decrementBtn.addEventListener("click", () => {
    count--;
    counter.innerHTML = count;
    countDisplay();
  });
  
  