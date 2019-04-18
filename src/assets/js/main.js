let header = document.querySelector("header");
let headerButton = document.querySelector("header li:nth-child(4)");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 754) {
    header.classList.add("is-visible");
    headerButton.classList.add("is-white");
  } else {
    header.classList.remove("is-visible");
    headerButton.classList.remove("is-white");
  }
});
