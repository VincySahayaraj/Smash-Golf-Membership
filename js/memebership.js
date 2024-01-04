//toggle switch 
const tableWrapper = document.querySelector(".carousel-inner");

const switchInputs = document.querySelectorAll(".switch-wrapper input");
const prices = tableWrapper.querySelectorAll(".price");
const toggleClass = "hide";

for (const switchInput of switchInputs) {
  switchInput.addEventListener("input", function () {
    for (const price of prices) {
      price.classList.add(toggleClass);
    }
    const activePrices = tableWrapper.querySelectorAll(
      `.price.${switchInput.id}`
    );
    console.log("varyrha",activePrices)
    for (const activePrice of activePrices) {
      activePrice.classList.remove(toggleClass);
    }
  });
}



