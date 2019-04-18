let header = document.querySelector("header");
let headerButton = document.querySelector("header li:nth-child(4)");
let h2 = document.querySelector("#h2");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 754) {
    header.classList.add("is-visible");
    headerButton.classList.add("is-white");
  } else {
    header.classList.remove("is-visible");
    headerButton.classList.remove("is-white");
  }
  if (window.pageYOffset > 340) {
    h2.classList.add("is-translating");
  }
});
